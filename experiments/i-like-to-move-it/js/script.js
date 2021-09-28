/**
fun squares
georgie mcf

shoddy little hallucination simulator
*/

"use strict";

let first = {
  x:undefined,
  y:undefined,
  size: 100,
}

let second = {
  x:undefined,
  y:undefined,
  size: 1,
}

let third = {
  x:undefined,
  y:undefined,
  size: 1,
}

let fourth = {
  x:undefined,
  y:undefined,
  size: 1,
}

let mover = {
  x: 0,
  y: undefined,
  size: 100,
}

/**
creates canvas
*/
function setup() {
createCanvas(windowWidth,windowHeight);
}


/**
moving the mouse will change the colour of the background and squares
*/
function draw() {
  let fillShadeR = map(mouseX,0,windowWidth,50,255);
  let fillShadeB = map(mouseY,0,windowHeight,50,255);

first.x = width/2
first.y = height/2
second.x = width/2
second.y = height/2
third.x = width/2
third.y = height/2
fourth.x = width/2
fourth.y = height/2
mover.y = height/2




background(fillShadeR,mouseX - mouseY,fillShadeB);

rectMode(CENTER);
fill(fillShadeB,fillShadeR,mouseX - mouseY);
rect(first.x,first.y,first.size);
stroke(0);

//once the first square reaches a size of 200, the 2nd square will
//appear, etc.
if (first.size>200){
second.size = first.size - 150
rectMode(CENTER);
fill(fillShadeR, fillShadeB, fillShadeB);
rect(second.x,second.y,second.size);
stroke(0);
}

if (second.size>200){
third.size = second.size - 150
rectMode(CENTER);
fill(fillShadeR, fillShadeB, mouseX - mouseY);
rect(third.x,third.y,third.size);
stroke(0);
}

if (third.size>200){
fourth.size = third.size - 150
rectMode(CENTER);
fill(fillShadeB,mouseX - mouseY,fillShadeR);
rect(fourth.x,fourth.y,fourth.size);
stroke(0);
}



//a message reading "cursor!" will hover over the cursor
fill(fillShadeR,mouseX - mouseY,fillShadeB);
textSize(20);
textAlign(CENTER,CENTER);
text('cursor!',mouseX,mouseY-10);

//sets the growth rate of the squares and limits them to the window height
//constrain function is maybe redundant because of the next section of code
first.size = first.size + 3
first.size = constrain(first.size, 0, windowHeight);

second.size = second.size + 3
second.size = constrain(second.size, 0, windowHeight);

third.size = third.size + 3
third.size = constrain(third.size, 0, windowHeight);

fourth.size = fourth.size + 3
fourth.size = constrain(fourth.size, 0, windowHeight);

mover.x = mover.x + 3;

if (mover.x>width+100) {
  mover.x = 1 - 100;
}

//once the squares reach a height of 1 below the window height, they will
//reset to 0
if (first.size>height-1) {
first.size = 0;
}


if (second.size>height-1) {
second.size = 0;
}


if (third.size>height-1) {
third.size = 0;
}


if (fourth.size>height-1) {
fourth.size = 0;
}

//maps the changing sizes of the squares to an RGB compatible scale
let moverR = map(first.size,0,width,0,255);
let moverG = map(second.size,0,width,0,255);
let moverB = map(fourth.size,0,width,0,255);

//creates a moving square and puts the text "hello 253!" inside
rectMode(CENTER);
fill(moverR, moverG, moverB);
stroke(0);
rect(mover.x,mover.y,mover.size);

fill(fillShadeR,mouseX - mouseY,fillShadeB);
textSize(20);
textAlign(CENTER,CENTER);
text('hello 253!',mover.x,mover.y);

}
