let img;
let size;
let asciiChar = "705EE////\/\3L!}{@7ver4fhe!<eá!لترى -*-*-*”_-_.,,’’’";

let video; let vidw = 64; let vidh = 48; let scl = 10;
let w, h;

//upload image
function preload() {
  img = loadImage("fij.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Use window dimensions
  video = createCapture(VIDEO);
  video.size(width / scl, height / scl); // Scale video to match canvas size
  
  w = width / video.width;
  h = height / video.height;
} 
 
function setup() {
  createCanvas(windowWidth, windowHeight); // Use window dimensions
  video = createCapture(VIDEO);
  video.size(width / scl, height / scl); // Scale video to match canvas size
  
  w = width / video.width;
  h = height / video.height;
}



function draw() {
  background(220);
  //image( img, 0, 0, width, height);
  video.loadPixels();
  
  //pixel colours
  for(let i=0; i<video.width; i++) {
    for(let j=0; j<video.height; j++) {
      let pixelIndex = (i + j*video.width) * 4;
      let r = video.pixels[pixelIndex + 0];
      let g = video.pixels[pixelIndex + 1];
      let b = video.pixels[pixelIndex + 2];
      
  //pixel brightness
      //let bright = brightness(color(r, g, b));
      let bright = (r + g + b) /3;
      let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length));
      
      let x = i*w + w/2;
      let y = j*h + h/2;
      let t = asciiChar.charAt(tIndex);
      textSize(w);
      textAlign(CENTER, CENTER);
      text(t, x, y);
    }
  }
 
  
//nested for loop to go through each of the image pixels
 // for (let i=0; i<img.width; i++) {
 //   for (let j=0; j<img.height; j++) {
      
 //     //getting pixel colour values 
 //     let pixelVal = img.get(i, j);
 //     let c = brightness(pixelVal);
 //     let tIndex = floor(map(c, 0, 100, 0, asciiChar.length));
      
 //     //draw characters
 //     let x = i*size + size/2;
 //     let y = j*size + size/2;
 //     let t = asciiChar.charAt(tIndex);
 //     textSize(size);
 //     textAlign(CENTER, CENTER);
 //     text(t, x, y);
 //   }
 //}
  
}