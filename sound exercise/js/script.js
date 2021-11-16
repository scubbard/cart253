/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let leftSprite = undefined;
let centerSprite = undefined;
let rightSprite = undefined;
let leftText = undefined;
let rightText = undefined;
let yeahText = undefined;

let leftImageShowing = false;
let rightImageShowing = false;
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
  background(0);

  //mouseWhere();
  keyPressed();
  keyReleased();
}

function keyPressed() {
  imageMode(CENTER);
  showLeft();
  showRight();
  checkCenter();
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || RIGHT_ARROW) {
    showCenter();
    rightIsShowing = false
    leftIsShowing = false
  }
}

function showLeft() {
  if (keyIsDown(LEFT_ARROW) && !rightImageShowing) {
    reset();
    leftImage();
    leftIsShowing = true
    }
  }

function showRight() {
  if (keyIsDown(RIGHT_ARROW) && !leftImageShowing) {
    reset();
    rightImage();
    rightIsShowing = true
  }
}

function showCenter() {
  reset();
  centerImage();
  centerImageShowing = true
}

function checkCenter() {
  if (!leftImageShowing || !rightImageShowing) {
    showCenter();
  }
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

function reset() {
  background(0);
  //checkCenter();
  leftImageShowing = false
  rightImageShowing = false
}
