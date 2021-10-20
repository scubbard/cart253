/**
music is good!

by georgie

short simulation. collect the music notes and win a prize (it's more music)!
*/

"use strict";

let state = `title`

let player = {
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  size:50,
  speed: 5,
}

let moverOne = {
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  size:30,
  speed: 5,
  rad: undefined,

}

let moverTwo = {
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  size:30,
  speed: 5,
  rad: undefined,
}

/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);
firstPosition();
}


/**
Description of draw()
*/
function draw() {
background(200,100,100);
  if (state === `title`) {
    title(); }
  if (state === `simulation`) {
    simulation();
  }
}

function simulation(){
  display();
  moverMove();
}

function display() {
  stroke(0);
  circle(player.x,player.y,player.size);
}

function title() {
  background(0,200,150);
  stroke(0);
  text(`click to start`,width/2,height/2);
}

function display(){
  push();
  stroke(0);
  fill(0);
  circle(player.x,player.y,player.size);
  pop();
  push();
  stroke(0);
  fill(200,0,50);
  circle(moverOne.x,moverOne.y,moverOne.size);
  circle(moverTwo.x,moverTwo.y,moverTwo.size);
  pop();
  bounce();
}

function moverMove(){
    moverOne.x = moverOne.x + moverOne.vx;
    moverOne.y = moverOne.y + moverOne.vy;
    moverTwo.x = moverTwo.x + moverTwo.vx;
    moverTwo.y = moverTwo.y + moverTwo.vy;

}

function firstPosition(){
  player.x = width/2;
  player.y = height/2;
  player.vx = random(-5,5);
  player.vy = random(-5,5);

  moverOne.x = width/4
  moverOne.y = height/2
  moverOne.vx = random(-2,2);
  moverOne.vy = random(-2,2);
  moverOne.rad = moverOne.size/2;

  moverTwo.x = width - width/4
  moverTwo.y = height/2
  moverTwo.vx = random(-2,2);
  moverTwo.vy = random(-2,2);
  moverTwo.rad = moverTwo.size/2;
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}

function bounce() {
//moverOne.x = constrain(moverOne.x,0 + moverOne.size, width - moverOne.size);
//moverOne.y = constrain(moverOne.y,0 + moverOne.size, height - moverOne.size);
//moverTwo.x = constrain(moverTwo.x,0 + moverTwo.size, width - moverTwo.size);
//moverTwo.y = constrain(moverTwo.y,0 + moverTwo.size, height - moverTwo.size);

if (moverOne.x > width - moverOne.rad || moverOne.x - moverOne.rad < 0
    || moverOne.y > height - moverOne.rad || moverOne.y < 0 + moverOne.rad){
      moverOne.vx = random(-2,2);
      moverOne.vy = random(-2,2);
    }
if (moverTwo.x > width - moverTwo.rad || moverTwo.x - moverTwo.rad < 0
        || moverTwo.y > height - moverTwo.rad || moverTwo.y < 0 + moverTwo.rad){
          moverTwo.vx = random(-2,2);
          moverTwo.vy = random(-2,2);
        }
}
