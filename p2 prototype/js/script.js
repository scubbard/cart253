/**
what type of song is this? prototype
code by georgie
*/

"use strict";
let myFont;
let typing = ``;
let state = `start`

function preload() {
  myFont = loadFont(`assets/HappyTime.otf`);
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
    simulation();
  }
  if (state === `ending`) {
    ending();
  }

wordTyped();
}

function simulation(){
  background(200,50,50);
  stroke(0);
  textFont(myFont);
  textSize(100);
  textAlign(CENTER);
  text(typing,width/2,height/2);
}

function keyTyped() {
  stroke(0);
  typing = typing + key;
}
//delete function is not currently working. need to debug
function keyPressed() {
  if (keyCode === BACKSPACE){
    typing = typing - key;
    print(typing);
  }
}

function wordTyped() {
  if (typing === `testing`){
  state = `ending`}
}

function ending() {
  background(50,200,0);
  text(`wahoo!`, width/2,height/2)

}
