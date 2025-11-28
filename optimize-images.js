const fs = require('fs');
const path = require('path');

// Sharp will be loaded after installation check
let sharp;

const assetsDir = path.join(__dirname, 'assets');
const optimizedDir = path.join(__dirname, 'assets_optimized');

if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir);
    console.log('📁 Created assets_optimized directory\n');
}

console.log('🚀 Starting image optimization...\n');

async function optimizeImages() {
    try {
        // Try to load sharp
        sharp = require('sharp');
    } catch (error) {
        console.error('❌ Sharp is not installed!');
        console.log('💡 Installing sharp package...\n');
        process.exit(1);
    }

    // Get all PNG files
    const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.png'));

    let totalOriginal = 0;
    let totalOptimized = 0;

    for (const file of files) {
        const inputPath = path.join(assetsDir, file);
        const outputName = file.replace('.png', '.webp');
        const outputPath = path.join(optimizedDir, outputName);

        const stats = fs.statSync(inputPath);
        const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        totalOriginal += stats.size;

        console.log(`📸 Processing: ${file} (${sizeMB}MB)`);

        try {
            // Convert to WebP with quality 85 (good balance)
            // For profile images (smaller), use higher quality
            // For background (larger), more aggressive compression
            const isBackground = file.includes('Council') || file.includes('1024x1024');
            const quality = isBackground ? 75 : 85;

            await sharp(inputPath)
                .webp({ quality: quality, effort: 6 })
                .toFile(outputPath);

            const newStats = fs.statSync(outputPath);
            const newSizeKB = (newStats.size / 1024).toFixed(0);
            const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);
            totalOptimized += newStats.size;

            console.log(`   ✅ ${outputName} (${newSizeKB}KB) - Reduced by ${reduction}%\n`);
        } catch (error) {
            console.error(`   ❌ Error processing ${file}:`, error.message);
        }
    }

    console.log('━'.repeat(60));
    console.log('📊 OPTIMIZATION SUMMARY:');
    console.log(`   Original total: ${(totalOriginal / (1024 * 1024)).toFixed(2)}MB`);
    console.log(`   Optimized total: ${(totalOptimized / (1024 * 1024)).toFixed(2)}MB`);
    console.log(`   Total reduction: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
    console.log('━'.repeat(60));
    console.log('✨ Optimization complete!');
    console.log('\n💡 Next steps:');
    console.log('   1. Review optimized images in assets_optimized/');
    console.log('   2. Replace assets/ with assets_optimized/ when ready');
}

optimizeImages().catch(err => {
    console.error('❌ Error:', err.message);
});
