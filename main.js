// Build: yarn start
// Add: compress-images / mozjpeg / pngquant / svgo / gifsicle

let compress_images = require('compress-images');
let InputPath = 'imagens/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
let OutputPath = 'build/img/';

let jpgOptions = {jpg: {engine: 'mozjpeg', command: ['-quality', '30']}};
let pngOptions = {png: {engine: 'pngquant', command: ['--quality=30']}};
let svgOptions = {svg: {engine: 'svgo', command: '--multipass'}};
let gifOptions = {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}};

compress_images(InputPath, OutputPath, {compress_force: false, statistic: true, autoupdate: true}, false,
  jpgOptions,
  pngOptions,
  svgOptions,
  gifOptions, 
  callBackCompressao);

  
const callBackCompressao = (error, completed, statistic) => {
  console.log('-------------');
  console.log(error);
  console.log(completed);
  console.log(statistic);
  console.log('-------------'); 
}