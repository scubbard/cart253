/**
music is good!

by georgie

short simulation. collect the music notes and win a prize (it's more music)!
*/

"use strict";

let state = `title`

let collectSFX;
let creditsSFX;


let player = {
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  size:50,
}

let moverOne = {
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  size:30,
  rad: undefined,

}

let moverTwo = {
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  size:30,
  rad: undefined,
}

let staticOne = {
  x: undefined,
  y: undefined,
  size:30,
  rad: undefined,
}

let staticTwo = {
  x: undefined,
  y: undefined,
  size:30,
  rad: undefined,
}

let staticThree = {
  x: undefined,
  y: undefined,
  size:30,
  rad: undefined,
}

let staticFour = {
  x: undefined,
  y: undefined,
  size:30,
  rad: undefined,
}

let staticFive = {
  x: undefined,
  y: undefined,
  size:30,
  rad: undefined,
}

function preload() {
  creditsSFX = loadSound(`assets/sounds/hawk.mp3`);
  collectSFX = loadSound(`assets/sounds/sfxHit.mp3`);
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
    simulation(); }
  if (state ===  `ending`) {
    ending();
  }
}

function simulation(){
  display();
  moverMove();
  playerMove();
  checkCollection();
}

function display() {
  stroke(0);
  circle(player.x,player.y,player.size);
}

function title() {
  background(0,200,150);
  stroke(0);
  textSize(20);
  text(`finish the song / click to start`,width/2,height/2);
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
  circle(staticOne.x,staticOne.y,staticOne.size);
  circle(staticTwo.x,staticTwo.y,staticTwo.size);
  circle(staticThree.x,staticThree.y,staticThree.size);
  circle(staticFour.x,staticFour.y,staticFour.size);
  circle(staticFive.x,staticFive.y,staticFive.size);
  pop();
  bounce();
  playerOverlap();
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

  staticOne.x = width/4
  staticOne.y = height/3

  staticTwo.x = width/2
  staticTwo.y = height/4

  staticThree.x = width - width/4
  staticThree.y = height/3

  staticFour.x = width/4
  staticFour.y = height - height/3

  staticFive.x = width - width/4
  staticFive.y = height - height/3

}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}

function playerMove(){
  if (keyIsDown(LEFT_ARROW)) {
    player.x = player.x - 3
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.x = player.x + 3
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.y = player.y + 3
  }
  if (keyIsDown(UP_ARROW)) {
    player.y = player.y - 3
  }
}

function bounce() {
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

function playerOverlap(){

  let dMoverOne = dist(moverOne.x,moverOne.y, player.x, player.y);
    if (dMoverOne < moverOne.size/2|| dMoverOne < player.size/2){
      moverOne.size = 0;
      isCollected();
    }
  let dMoverTwo = dist(moverTwo.x,moverTwo.y, player.x, player.y);
    if (dMoverTwo < moverTwo.size/2|| dMoverTwo < player.size/2){
    moverTwo.size = 0;
    isCollected();
    }
  let dStaticOne = dist(staticOne.x,staticOne.y, player.x, player.y);
    if (dStaticOne < staticOne.size/2|| dStaticOne < player.size/2){
    staticOne.size = 0;
    isCollected();
    }
  let dStaticTwo = dist(staticTwo.x,staticTwo.y, player.x, player.y);
    if (dStaticTwo < staticTwo.size/2|| dStaticTwo < player.size/2){
      staticTwo.size = 0;
      isCollected();
    }
  let dStaticThree = dist(staticThree.x,staticThree.y, player.x, player.y);
    if (dStaticThree < staticThree.size/2|| dStaticThree < player.size/2){
      staticThree.size = 0;
      isCollected();
    }
  let dStaticFour = dist(staticFour.x,staticFour.y, player.x, player.y);
    if (dStaticFour < staticFour.size/2|| dStaticFour < player.size/2){
      staticFour.size = 0;
      isCollected();
    }
  let dStaticFive = dist(staticFive.x,staticFive.y, player.x, player.y);
    if (dStaticFive < staticFive.size/2|| dStaticFive < player.size/2){
      staticFive.size = 0;
      isCollected();
    }



}

function isCollected(){
//play sound effect
collectSFX.play();
}


function checkCollection(){
  if (moverOne.size < 1 && moverTwo.size < 1 && staticOne.size < 1
      && staticTwo.size < 1 && staticThree.size < 1 && staticFour.size < 1
      && staticFive.size < 1)
        {
          allCollected();
          state = `ending`
        }
}

function allCollected(){
  //sound effect
  creditsSFX.play();
}

function ending(){

  stroke(0);
  background(200,50,100);
  textSize(30);
  text(`you're such a wonderful musician!`,width/2, height/2);
}
