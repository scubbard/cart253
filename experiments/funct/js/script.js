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

  firstCirc.x = width/3
  firstCirc.y = height/2
  secondCirc.x = width/3 + width/3
  secondCirc.y = height/2

firstCirc.vx = random(-firstCirc.speed,firstCirc.speed);
firstCirc.vy = random(-firstCirc.speed,firstCirc.speed);

secondCirc.vx = random(-secondCirc.speed,secondCirc.speed);
secondCirc.vy = random(-secondCirc.speed,secondCirc.speed);


createCanvas(windowWidth,windowHeight);
//reset();
}


/**
Description of draw()
*/
function draw() {


  background(255);

let offScreen = circleOffScreen();
  if (offScreen) {
  background(0);
  }


circle(firstCirc.x,firstCirc.y,firstCirc.size);
  firstCirc.x = firstCirc.x + firstCirc.vx;
  firstCirc.y = firstCirc.y + firstCirc.vy;

circle(secondCirc.x,secondCirc.y,secondCirc.size);
  secondCirc.x = secondCirc.x + secondCirc.vx;
  secondCirc.y = secondCirc.y + secondCirc.vy;

}


function circleOffScreen() {
  let result = (firstCirc.x > width || firstCirc.x < 0 || firstCirc.y > height ||
      firstCirc.y < 0 || secondCirc.x > width || secondCirc.x < 0 ||
      secondCirc.y > height || secondCirc.y < 0);
  print(result);
  return result;
}


function reset() {
  firstCirc.x = width/3;
  firstCirc.y = height/2;
  firstCirc.vx = 0;
  firstCirc.vy = 0;

  secondCirc.x = width/3 + width/3;
  secondCirc.y = height/2;
  secondCirc.vx = 0;
  secondCirc.vy = 0;
}
