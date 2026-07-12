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
      // Convert favicon SVG to 32x32 PNG for maximum legacy browser compatibility
      await sharp(faviconSvgPath)
        .resize(32, 32)
        .png()
        .toFile(faviconPngPath);
      console.log("✓ Successfully created public/favicon.png (32x32)");
    }

    console.log("Conversion complete!");
  } catch (error) {
    console.error("Error converting SVG to PNG:", error);
    process.exit(1);
  }
}

convert();
