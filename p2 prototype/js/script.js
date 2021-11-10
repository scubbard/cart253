/**
what type of song is this? prototype
code by georgie
*/

"use strict";
let myFont;
let mySong;
let typing = ``;
let state = `start`
let textPosition = {
  x: 30,
  y: 30,
  vx: 2,
  vy: 2,
}

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

wordTyped();
}

function simulation(){
  background(200,50,50);
  words();
  floatyWords();
  staticText();
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
  typing = typing + key;
}
//delete function is not currently working. need to debug
function keyPressed() {
  if (keyCode === BACKSPACE){
    typing = typing - key;
  }
  if (keyCode === DOWN_ARROW){
    fullReset();
  }
}

function wordTyped() {
  if (typing === `testing`){
  state = `ending`}
}

function ending() {
  background(50,200,0);
  textSize(100);
  text(`wahoo!`, width/2,height/2)
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
