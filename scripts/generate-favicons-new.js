import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicons() {
    const sizes = {
        'favicon-16x16.png': 16,
        'favicon-32x32.png': 32,
        'apple-touch-icon.png': 180,
        'android-chrome-192x192.png': 192,
        'android-chrome-512x512.png': 512
    };

    try {
        // Read the SVG file
        const inputSvg = await fs.readFile(join(__dirname, '../public/icon.svg'));

        // Generate each size
        for (const [filename, size] of Object.entries(sizes)) {
            await sharp(inputSvg)
                .resize(size, size)
                .png()
                .toFile(join(__dirname, '../public', filename));
        }

        // Generate 32x32 PNG for favicon
        await sharp(inputSvg)
            .resize(32, 32)
            .png()
            .toFile(join(__dirname, '../public/favicon.png'));

        console.log('✅ All favicons generated successfully');
    } catch (error) {
        console.error('Error generating favicons:', error);
    }
}

generateFavicons();
