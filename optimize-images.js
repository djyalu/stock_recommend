const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');

async function optimizeImages() {
    console.log('🖼️  이미지 최적화 시작...\n');
    
    const files = fs.readdirSync(assetsDir);
    let totalSaved = 0;
    
    for (const file of files) {
        if (!file.endsWith('.png')) continue;
        
        const inputPath = path.join(assetsDir, file);
        const stats = fs.statSync(inputPath);
        const originalSize = stats.size;
        
        // 배경 이미지 (32_Investment... 로 시작)
        if (file.startsWith('32_Investment')) {
            const outputPath = path.join(assetsDir, file.replace('.png', '.webp'));
            
            await sharp(inputPath)
                .resize(1920, null, { 
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .webp({ quality: 75 })
                .toFile(outputPath);
            
            const newStats = fs.statSync(outputPath);
            const saved = originalSize - newStats.size;
            totalSaved += saved;
            
            console.log(`✅ ${file}`);
            console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024).toFixed(0)}KB (${(saved / 1024 / 1024).toFixed(2)}MB 절약)\n`);
        }
        // 구루 이미지
        else if (file.startsWith('Disney_Style_Guru')) {
            const outputPath = path.join(assetsDir, file.replace('.png', '.webp'));
            
            await sharp(inputPath)
                .resize(200, 200, { 
                    fit: 'cover',
                    position: 'top'
                })
                .webp({ quality: 80 })
                .toFile(outputPath);
            
            const newStats = fs.statSync(outputPath);
            const saved = originalSize - newStats.size;
            totalSaved += saved;
            
            console.log(`✅ ${file}`);
            console.log(`   ${(originalSize / 1024).toFixed(0)}KB → ${(newStats.size / 1024).toFixed(0)}KB (${(saved / 1024).toFixed(0)}KB 절약)`);
        }
    }
    
    console.log('\n========================================');
    console.log(`🎉 총 절약: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
    console.log('========================================\n');
    console.log('💡 이제 script.js와 style.css에서 .png를 .webp로 변경하세요!');
}

optimizeImages().catch(console.error);
