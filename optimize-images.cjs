(async () => {
  const [
    { default: imagemin },
    { default: imageminMozjpeg },
    { default: imageminPngquant },
  ] = await Promise.all([
    import("imagemin"),
    import("imagemin-mozjpeg"),
    import("imagemin-pngquant"),
  ]);

  const files = await imagemin(['src/assets/*.{jpg,png}'], {
    destination: 'src/assets/optimized',
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.6, 0.8] })
    ]
  });

  console.log('Images optimized:', files.map(f => f.sourcePath));
})();
