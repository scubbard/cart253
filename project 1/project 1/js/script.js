/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let state = `title`

/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);
background(200);
}


/**
Description of draw()
*/
function draw() {
  if (state === `title`) {
    title(); }
}

function title() {
  background(0,200,150);
  stroke(0);
  text(`click to start`,width/2,height/2);
}
