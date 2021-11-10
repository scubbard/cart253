/**
what type of song is this? prototype
code by georgie
*/

"use strict";
let myFont;


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
background(200,50,50);
stroke(0);
textFont(myFont);
textSize(100);
text(key,width/2,height/2);


}

function keyTyped() {
  stroke(0);
  text(key);
}
