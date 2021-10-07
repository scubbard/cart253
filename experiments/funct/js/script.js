/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let firstCirc = {
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  size:100,
  speed: 5,
  fill: 255,
}

let secondCirc = {
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  size:100,
  speed: 5,
}

function preload() {

}


/**
Description of setup
*/
function setup() {

vx = random(-firstCirc.speed,fistCirc.speed);
vy = random(-firstCirc.speed,firstCirc.speed);

vx = random(-secondCirc.speed,secondCirc.speed);
vy = random(-secondCirc.speed,secondCirc.speed);


createCanvas(windowWidth,windowHeight);
}


/**
Description of draw()
*/
function draw() {
firstCirc.x = width/3
firstCirc.y = height/2
secondCirc.x = width/3 + width/3
secondCirc.y = height/2

background(255);

circle(firstCirc.x,firstCirc.y,firstCirc.size,firstCirc.speed);

firstCirc.x = firstCirc.x + firstCirc.vx
firstCirc.y = firstCirc.y + firstCirc.vy

secondCirc.x = secondCirc.x + secondCirc.vx
secondCirc.y = secondCirc.y + secondCirc.vy
circle(secondCirc.x,secondCirc.y,secondCirc.size,secondCirc.speed);
}
