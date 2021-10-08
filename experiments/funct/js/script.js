/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let state = `title`

let firstCirc = {
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  size:50,
  speed: 5,
}

let secondCirc = {
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  size:50,
  speed: 5,
}

/**
Description of setup
*/
function setup() {

  reset();

  firstCirc.x = width/3;
  firstCirc.y = height/2;
  secondCirc.x = width/3 + width/3;
  secondCirc.y = height/2;

firstCirc.vx = random(-firstCirc.speed,firstCirc.speed);
firstCirc.vy = random(-firstCirc.speed,firstCirc.speed);

secondCirc.vx = random(-secondCirc.speed,secondCirc.speed);
secondCirc.vy = random(-secondCirc.speed,secondCirc.speed);


createCanvas(windowWidth,windowHeight);

}


/**
Description of draw()
*/
function draw() {
  background(firstCirc.x,firstCirc.y,secondCirc.x);
  if (state === `simulation`) {
    simulation(); }
  if (state === `title`) {
    title(); }
  if (state === `love`) {
    love(); }
  if (state === `sadness`) {
    sadness();
  }
}


function simulation() {
  display();
  move();
  checkOffScreen();
  checkOverlap();
}

function circleOffScreen() {
  let result =
    (firstCirc.x > width + firstCirc.size/2  ||
    firstCirc.x < 0 - firstCirc.size/2 ||
    firstCirc.y > height + firstCirc.size/2 ||
    firstCirc.y < 0 - firstCirc.size/2 ||
    secondCirc.x > width + secondCirc.size/2 ||
    secondCirc.x < 0 - secondCirc.size/2 ||
    secondCirc.y > height + secondCirc.size/2 ||
    secondCirc.y < 0 - secondCirc.size/2 );
  print(result);
  return result;
}


function reset() {
  firstCirc.x = width/3;
  firstCirc.y = height/2;
  firstCirc.vx = random(-5,5);
  firstCirc.vy = random(-5,5);

  secondCirc.x = width/3 + width/3;
  secondCirc.y = height/2;
  secondCirc.vx = random(-5,5);
  secondCirc.vy = random(-5,5);
}

function checkOverlap() {
  let d = dist(firstCirc.x,firstCirc.y,secondCirc.x,secondCirc.y);
  print(firstCirc.size/2);
  print(secondCirc.size/2);
  print(d);
  if (d < firstCirc.size/2|| d < secondCirc.size/2){
  state = `love`;
  }
}


function display() {
    stroke(0);
    circle(firstCirc.x,firstCirc.y,firstCirc.size);
    circle(secondCirc.x,secondCirc.y,secondCirc.size);
}

function move() {

    firstCirc.x = firstCirc.x + firstCirc.vx;
    firstCirc.y = firstCirc.y + firstCirc.vy;

    secondCirc.x = secondCirc.x + secondCirc.vx;
    secondCirc.y = secondCirc.y + secondCirc.vy;

}

function checkOffScreen() {
  let offScreen = circleOffScreen();
    if (offScreen) {
    //reset();
    state = `sadness`;
    }
}

function title() {
text(`LOVE!`, width/2, height/2);
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}

function love() {
  text(`it's true love!`,width/2,height/2);
}

function sadness() {
  text(`this is so sad :(`,width/2,height/2);
}
