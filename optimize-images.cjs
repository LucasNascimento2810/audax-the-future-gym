import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
  const files = await imagemin(['src/assets/*.{jpg,png}'], {
    destination: 'src/assets/optimized',
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.6, 0.8] })
    ]
  });

  console.log('Images optimized:', files.map(f => f.sourcePath));
})();