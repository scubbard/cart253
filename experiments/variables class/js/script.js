/**
variables!
george mcf

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//let circleSize = 100
//let mouseX = 255;
let green = 255;
let blue = 255;
let myRect = {
  x: 5,
  y: 250,
  size: 5,
  speed: 1.02,
  yAngle: 0,
};

function setup() {
createCanvas(windowWidth,windowHeight);
background(0);
}

function draw() {


noFill(0);
let mouseX = map(mouseX, 0, width, 0, 255)
stroke(mouseX, green, blue);
rect(myRect.x,myRect.y,myRect.size,myRect.size);

myRect.x = myRect.x + myRect.speed;

//constrain!
myRect.x = constrain(myRect.x,0,windowWidth);
mouseX = constrain(mouseX,100,255);
green = constrain(green,50,255);
blue = constrain(blue,25,255);

myRect.size = myRect.size + 1;
//mouseX = mouseX - 0.2 ;
green = green -0.4;
blue = blue -0.6;


let yChange = sin(myRect.yAngle) * 10;
myRect.y = myRect.y + yChange
myRect.yAngle += 0.1;

}
