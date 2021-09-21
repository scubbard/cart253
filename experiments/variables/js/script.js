/**
variables!
george mcf

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let circleSize = 100
let red = 100
let green = 200
let blue = 150
/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);



}


/**
moving the mouse changes the colour of the background and inversely the
colour of the square
*/
function draw() {
background(red,green,blue);
red = red + 1
blue = blue - 1
//background(200,0,0);
rectMode(CENTER);
fill(mouseY,mouseX,0);
circle(width/2,height/2,circleSize);
circleSize = circleSize + 1;
width = width - 1
//circle(100,100,circleSize,circleSize);
}
