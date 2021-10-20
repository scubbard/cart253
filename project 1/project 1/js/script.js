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
  size:50,
  speed: 5,
}

let moverTwo = {
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
createCanvas(windowWidth,windowHeight);
firstPosition();
}


/**
Description of draw()
*/
function draw() {
  if (state === `title`) {
    title(); }
  if (state === `simulation`) {
    simulation();
  }
}

function simulation(){
  display();
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

  moverTwo.x = width - width/4
  moverTwo.y = height/2
  moverTwo.vx = random(-2,2);
  moverTwo.vy = random(-2,2);
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
