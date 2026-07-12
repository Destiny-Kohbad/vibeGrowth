import sharp from "sharp";
import fs from "fs";
import path from "path";

async function convert() {
  try {
    console.log("Starting SVG to PNG conversion...");

    const socialSvgPath = "./public/social-preview.svg";
    const socialPngPath = "./public/social-preview.png";

    if (fs.existsSync(socialSvgPath)) {
      // Convert social preview SVG to 1200x630 PNG
      await sharp(socialSvgPath)
        .resize(1200, 630)
        .png()
        .toFile(socialPngPath);
      console.log("✓ Successfully created public/social-preview.png (1200x630)");
    } else {
      console.error("Error: public/social-preview.svg does not exist");
    }

    const faviconSvgPath = "./public/favicon.svg";
    const faviconPngPath = "./public/favicon.png";

    if (fs.existsSync(faviconSvgPath)) {
      // 1. Convert favicon SVG to standard legacy 32x32 PNG
      await sharp(faviconSvgPath)
        .resize(32, 32)
        .png()
        .toFile(faviconPngPath);
      console.log("✓ Successfully created public/favicon.png (32x32)");

      // 2. Convert favicon SVG to 32x32 named PNG
      await sharp(faviconSvgPath)
        .resize(32, 32)
        .png()
        .toFile("./public/favicon-32x32.png");
      console.log("✓ Successfully created public/favicon-32x32.png (32x32)");

      // 3. Convert favicon SVG to 192x192 PNG for Android/Chrome
      await sharp(faviconSvgPath)
        .resize(192, 192)
        .png()
        .toFile("./public/favicon-192x192.png");
      console.log("✓ Successfully created public/favicon-192x192.png (192x192)");

      // 4. Convert favicon SVG to 512x512 PNG for high-res web apps
      await sharp(faviconSvgPath)
        .resize(512, 512)
        .png()
        .toFile("./public/favicon-512x512.png");
      console.log("✓ Successfully created public/favicon-512x512.png (512x512)");

      // 5. Convert favicon SVG to 180x180 PNG for Apple Touch Icon
      await sharp(faviconSvgPath)
        .resize(180, 180)
        .png()
        .toFile("./public/apple-touch-icon.png");
      console.log("✓ Successfully created public/apple-touch-icon.png (180x180)");
    }

    console.log("Conversion complete!");
  } catch (error) {
    console.error("Error converting SVG to PNG:", error);
    process.exit(1);
  }
}

convert();
