import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Helper to replace staging URLs and make relative Open Graph tags absolute
  function resolveMetaTags(html: string, host: string, protocol: string): string {
    // Prefer APP_URL environment variable if set, otherwise use request parameters
    let origin = `${protocol}://${host}`;
    if (process.env.APP_URL) {
      origin = process.env.APP_URL.replace(/\/$/, ""); // Trim trailing slash
    }
    
    let modified = html;
    
    // 1. Ensure all og:image and twitter:image are fully qualified absolute URLs pointing to the current domain
    modified = modified.replace(/content="\/social-preview\.png"/g, `content="${origin}/social-preview.png"`);

    // 2. Replace hardcoded canonical URL and meta domains if we are in a staging / preview URL
    if (!host.includes("localhost") && !host.includes("vibegrowthsolution.com")) {
      modified = modified.replace(/https:\/\/vibegrowthsolution\.com/g, origin);
    }
    
    return modified;
  }

  // Health check API
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  if (process.env.NODE_ENV !== "production") {
    // Development mode with Vite Dev Server middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom", // Use custom to handle index.html routing ourselves
    });
    
    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;
      try {
        const indexPath = path.join(process.cwd(), "index.html");
        if (!fs.existsSync(indexPath)) {
          return res.status(404).send("index.html not found");
        }
        
        let template = fs.readFileSync(indexPath, "utf-8");
        template = await vite.transformIndexHtml(url, template);

        const protocol = (req.headers["x-forwarded-proto"] as string) || req.protocol;
        const host = req.get("host") || "localhost:3000";
        template = resolveMetaTags(template, host, protocol);

        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Production mode - serve compiled assets
    const distPath = path.join(process.cwd(), "dist");

    // Serve static assets first, excluding index.html so our fallback route handles it dynamically
    app.use(express.static(distPath, { index: false }));

    app.get("*", (req, res) => {
      try {
        const indexPath = path.join(distPath, "index.html");
        if (!fs.existsSync(indexPath)) {
          return res.status(404).send("Application build not found. Please compile the applet.");
        }
        
        let html = fs.readFileSync(indexPath, "utf-8");
        
        const protocol = (req.headers["x-forwarded-proto"] as string) || req.protocol;
        const host = req.get("host") || "vibegrowthsolution.com";
        html = resolveMetaTags(html, host, protocol);

        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (err) {
        console.error("Error serving index.html in production:", err);
        res.status(500).send("Internal Server Error");
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
