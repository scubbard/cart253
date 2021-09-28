/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


let mover = {
  x: 0,
  y: undefined,
  size: 100,
}

/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight)


}


/**
Description of draw()
*/
function draw() {
mover.y = height/2

rect(mover.x,mover.y,mover.size)

mover.x = mover.x + 1
}
