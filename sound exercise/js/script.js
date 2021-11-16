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

/**
Description of preload
*/
function preload() {
  leftSprite = loadImage(`assets/images/left.png`);
  centerSprite = loadImage(`assets/images/middle.png`);
  rightSprite = loadImage(`assets/images/right.png`);
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
}
