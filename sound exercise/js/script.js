/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let state = `start`;

let leftSprite;
let rightSprite;
let centerSprite;

let leftText;
let rightText;
let yeahText;

let currentSprite = centerSprite;
let currentText = yeahText;


let layerOne;
let ooh;
let ah;
let synth;
let notes = [`C5`,`D5`,`E5`,`F5`,`G5`,`A6`,`B6`];
let osc


let centerImageShowing = false;

/**
Description of preload
*/
function preload() {
  leftSprite = loadImage(`assets/images/left.png`);
  centerSprite = loadImage(`assets/images/middle.png`);
  rightSprite = loadImage(`assets/images/right.png`);
  rightText = loadImage(`assets/images/rightText.png`);
  leftText = loadImage(`assets/images/leftText.png`);
  yeahText = loadImage(`assets/images/yeahText.png`);

  layerOne = loadSound(`assets/sounds/songLayerFast.mp3`);
  ooh = loadSound(`assets/sounds/ooh.mp3`);
  ah = loadSound(`assets/sounds/ah.mp3`);
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);
  outputVolume(0.4);
  synth = new p5.MonoSynth();
  osc = new p5.Oscillator(`sawtooth`);
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
}
function handleInput() {
  if (keyIsDown(LEFT_ARROW)) {
    currentSprite = leftSprite;
  } else if (keyIsDown(RIGHT_ARROW)) {
    currentSprite = rightSprite;
  } else {
    currentSprite = centerSprite;
  }
}

function keyPressed() {
  imageMode(CENTER);
  showLeft();
  showRight();
  if (keyCode === DOWN_ARROW) {
    layerOne.stop();
  }
  //checkCenter();
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || RIGHT_ARROW) {
    showCenter();
  }
}

function showLeft() {
  if (keyIsDown(LEFT_ARROW)) {
    reset();
    leftImage();
    song();
    ahSFX();
    playRandomNote();
    }
  }

function showRight() {
  if (keyIsDown(RIGHT_ARROW)) {
    reset();
    rightImage();
    song();
    oohSFX();
    playRandomNote();
  }
}

function showCenter() {
  reset();
  centerImage();
  centerImageShowing = true
}

function mousePressed() {
  if (state === `start`) {
    state = `simulation`;
  }
}

/**
function checkCenter() {
  if (!leftImageShowing || !rightImageShowing) {
    showCenter();
  }
}
*/

function playRandomNote() {
  let note = random(notes);
  synth.play(note,1,0,1);
}

function start(){
  background(200,0,70);
  textSize(50);
  text(`click to start`,width/2,height/2)
}

function simulation(){
  background(0);
  textAlign(CENTER);
  push();
    stroke(255);
    fill(200,150,0);
    text(`use left and right arrow keys to dance!`,width/2,height - height/5);
  pop();
  push();
    stroke(255);
    fill(0,0,50);
    text(`press down to turn off music :)`,width/2,height - height/8);
  pop();
  image(currentSprite);
  handleInput();
  myText();


}

function leftImage() {
    image(leftSprite,width/3,height/2);
    image(leftText,width/3,height - height/4);
  }

function centerImage() {
  image(centerSprite,width/2,height/2);
  image(yeahText,width/2,height - height/4);
}

function rightImage() {
  image(rightSprite,width - width/3,height/2);
  image(rightText,width - width/3, height - height/4)
}


function song() {
  if(!layerOne.isPlaying()){
    layerOne.loop();
  }
}

function oohSFX() {
  if (!ooh.isPlaying()){
    ooh.play();
  }
}

function ahSFX() {
  if (!ah.isPlaying()){
    ah.play();
  }
}

function reset() {
  background(0);
  //checkCenter();
}

function myText(){
  text(currentText,currentText.x,currentText.y);
}
