/**
class experiments
georgie mcf

*/

"use strict";

let georgieSmall = undefined;
let georgieSmile = undefined;
let claudineOh = undefined;
let claudineSlender = undefined;

let myCircle = {
  x:0,
  y:0,
  size:50,
  fill:200,
};

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
  if (keyIsPressed) {
    background(255);
  }
  else {
    background(0);
  }
//  background(0);

  imageMode(CENTER);
  translate(width/2, height/2);
  if (mouseX < width/2) {
    scale(1, 1);
    image(georgieSmall,0,0,300,300);
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text('hi!', 0, 0);
  } else {
      scale(1, 1);
      image(georgieSmile, 0, 0, 300, 300);
      fill(255);
      textSize(30);
      textAlign(CENTER);
      text('how are you!', 0, 0);
  }

  circle(myCircle.x,myCircle.y,myCircle.size,myCircle.fill);

  //image(georgieSmile, width/2, height/2)
}

function mouseDragged() {
  myCircle.x = mouseX-250;
  myCircle.y = mouseY-250;

  circle(myCircle.x,myCircle.y,myCircle.size,myCircle.fill);
  if(myCircle.x < width/2) {
    myCircle.fill = 200;
  } else {
    myCircle.fill = 255;
  }
}
