/**
what type of song is this? prototype
code by georgie
*/

"use strict";
let myFont;
let mySong;
let lastKey;
let typing = ``;
let state = `start`

let r;
let g;
let b;

let textPosition = {
  x: 30,
  y: 30,
  vx: 2,
  vy: 2,
};

let rectOne = {
  size: 800
};
let rectTwo = {
  size: 600
};
let rectThree = {
  size: 400
};
let rectFour = {
  size: 200
};
let rectFive = {
  size: 100
};

function preload() {
  myFont = loadFont(`assets/HappyTime.otf`);
  mySong = loadSound(`assets/sounds/doAgain.mp3`);
}



/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);
}


/**
Description of draw()
*/
function draw() {
  if (state === `start`) {
    start();
  }

  if (state === `simulation`) {
    simulation();
  }
  if (state === `ending`) {
    ending();
  }
  if (state === `endingTwo`) {
    endingTwo();
  }

wordTyped();
}

function simulation(){
  background(200,50,50);
  myRect();
  words();
  floatyWords();
  staticText();

}

function myRect() {
  rectMode(CENTER);
  push();
    noStroke();
    fill(r, 50, 50);
    r = random(r,0,255);
    rect(width/2, height/2 ,rectOne.size)
  pop();
  push();
    noStroke();
    fill(50,g,50)
    g = random(g,0,255);
    rect(width/2, height/2,rectTwo.size)
  pop();
  push();
    noStroke();
    fill(50,50,b);
    b = random(b,0,255);
    rect(width/2, height/2, rectThree.size)
  pop();
  push();
    noStroke();
    fill(r,g,100);
    r = random(r,100,255)
    g = random(g,0,100);
    rect(width/2, height/2,rectFour.size)
  pop();
  push();
    noStroke();
    fill(r,50,b);
    r = random(r,0,100);
    b = random(b,100,255);
    rect(width/2, height/2,rectFive.size)
  pop();
}

function words(){
  stroke(0);
  textFont(myFont);
  textSize(100);
  textAlign(CENTER);
  text(typing,width/2,height/2);
}

function floatyWords(){
  textSize(30);
  text(`testing testing...check..1..2....`,textPosition.x,textPosition.y)
  textPosition.x = textPosition.x + textPosition.vx
  textPosition.y = textPosition.y + textPosition.vy
  textReset();
}

function staticText(){
  textSize(15);
  text(`press down arrow to reset`,width/2,800);
}

function keyTyped() {
  stroke(0);
  typing += key;
}

function keyPressed() {
  if (keyCode === BACKSPACE){
    typing = typing.substring(0, typing.length - 1);
  }
  if (keyCode === DOWN_ARROW){
    fullReset();
  }
}

function wordTyped() {
  if (typing === `testing`){
  state = `ending`}
  if (typing === `theo boehm`){
  state = `endingTwo`}
}

function ending() {
  background(50,200,0);
  textSize(100);
  text(`wahoo!`, width/2,height/2)
  song();
}

function endingTwo(){
  background(250,200,0);
  textSize(100);
  text(`theo!`, width/2,height/2)
  song();
}

function start() {
  background(0,50,200);
  text(`click 2 start`,width/2,height/2)
}

function song() {
  if(!mySong.isPlaying()){
    mySong.loop();
  if(state != `ending`){
    mySong.stop();
  }
  }
}


function mousePressed() {
  if (state === `start`) {
    state = `simulation`;
  }
}

function fullReset() {
  if (keyCode === DOWN_ARROW){
    state = `start`
    typing = ``;
    mySong.stop();
  }
}


function textReset() {
  if (textPosition.x>width || textPosition.y>height){
    textPosition.x = 0
    textPosition.y = 0
  }
}
