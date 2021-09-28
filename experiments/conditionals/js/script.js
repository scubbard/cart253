/**
class experiments
georgie mcf

*/

"use strict";

let georgieSmall = undefined;
let georgieSmile = undefined;

function preload() {
  georgieSmall = loadImage('assets/images/georgieSMALL.png');
  georgieSmile = loadImage('assets/images/georgieSMILE.png');
}

/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
}


/**
Description of draw()
*/
function draw() {
  background(0);

  imageMode(CENTER);
  translate(width/2, height/2);
  if (mouseX < width/2) {
    scale(1, 1);
    image(georgieSmile,0,0,300,300);
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text('hello!', 0, 0);
  } else {
      scale(1, 1);
      image(georgieSmall, 0, 0, 300, 300);
      fill(255);
      textSize(30);
      textAlign(CENTER);
      text('how are you!', 0, 0);
  }

  //image(georgieSmile, width/2, height/2)
}
