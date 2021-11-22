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

let r = 100;
let g = 100;
let b = 100;

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
  rectMode(CORNERS);
  push();
    noStroke();
    fill(r, 50, 10);
    rect(50, 50, width - 50,height - 50,)
  pop();
  push();
    noStroke();
    fill(200,g,20)
    rect(100, 100, width - 100,height - 100,)
  pop();
  push();
    noStroke();
    fill(100,0,b);
    rect(200, 200, width - 200,height - 200,)
  pop();
  push();
    noStroke();
    fill(r,g,40);
    rect(300, 300, width - 300,height - 300,)
  pop();
  push();
    noStroke();
    fill(r,50,b);
    rect(400, 400, width - 400,height - 400,)
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
  r = random(100,255);
  g = random(100,255);
  b = random(100,255);
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
