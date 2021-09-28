/**
class experiments
georgie mcf

*/

"use strict";

let georgieSmall = undefined;
let georgieSmile = undefined;
let claudineOh = undefined;
let claudineSlender = undefined;

function preload() {
  georgieSmall = loadImage('assets/images/georgieSMALL.png');
  georgieSmile = loadImage('assets/images/georgieSMILE.png');
  claudineOh = loadImage('assets/images/oh.png');
  claudineSlender = loadImage('assets/images/slenderman.jpg');
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
    image(claudineOh,0,0,300,300);
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text('fuck you', 0, 0);
  } else {
      scale(1, 1);
      image(claudineSlender, 0, 0, 300, 300);
      fill(255);
      textSize(30);
      textAlign(CENTER);
      text('you are cringe', 0, 0);
  }

  //image(georgieSmile, width/2, height/2)
}
