/**
do a little dance
by georgie

watch this guy do a little dance. make him move to the left. OR the right.
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
let notes = [`C5`, `D5`, `E5`, `F5`, `G5`, `A6`, `B6`];

let centerImageShowing = false;

/**
loading all sounds and images for later use in code
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
creating the canvas, making sure the output isn't too hot, and setting up the
polysynth for later use.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  outputVolume(0.4);
  synth = new p5.MonoSynth();


}


/**
setting conditions for state changes and calling functions to act these states
out.
*/
function draw() {
  if (state === `start`) {
    start();
  }

  if (state === `simulation`) {
    simulation();
  }
}
/**
displays sprite on the left hand side while holding left arrow, and vice versa
*/
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
/**
creates a title screen to get user input
*/
function mousePressed() {
  if (state === `start`) {
    state = `simulation`;
  }
}

//user input makes a random note in the C Major scale play
function playRandomNote() {
  let note = random(notes);
  synth.play(note, 1, 0, 1);
}
//aforementioned title screen
function start() {
  background(200, 0, 70);
  textAlign(CENTER)
  textSize(50);
  text(`click to start`, width / 2, height / 2)
}
/**
the main simulation. calls the sprites, sound effects, and plays music
once the user begins the left/right sequence
*/
function simulation() {
  background(0);
  textAlign(CENTER);
  push();
  stroke(255);
  fill(200, 150, 0);
  text(`use left and right arrow keys to dance!`, width / 2, height - height / 5);
  pop();
  push();
  stroke(255);
  fill(0, 0, 50);
  text(`press down to turn off music :)`, width / 2, height - height / 8);
  pop();
  image(currentSprite);
  handleInput();
  myText();


}
//image calling functions
function leftImage() {
  image(leftSprite, width / 3, height / 2);
  image(leftText, width / 3, height - height / 4);
}

function centerImage() {
  image(centerSprite, width / 2, height / 2);
  image(yeahText, width / 2, height - height / 4);
}

function rightImage() {
  image(rightSprite, width - width / 3, height / 2);
  image(rightText, width - width / 3, height - height / 4)
}

//plays and loops the song as long as it isn't already playing
function song() {
  if (!layerOne.isPlaying()) {
    layerOne.loop();
  }
}
//plays a sound effect
function oohSFX() {
  if (!ooh.isPlaying()) {
    ooh.play();
  }
}

function ahSFX() {
  if (!ah.isPlaying()) {
    ah.play();
  }
}

function reset() {
  background(0);
  //checkCenter();
}

function myText() {
  text(currentText, currentText.x, currentText.y);
}
