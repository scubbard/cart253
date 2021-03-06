/**
where'd everybody go? - an exercise in humility
code and art by georgie
*/

"use strict";
let myFont;
let doAgain;
let dkIce;

let briAndSue;
let broadest;
let castleWallWaltz;
let pontiac2;

//donkey kong images
let dkOne;
let dkTwo;
let dkThree;
let dkFour;
let dkFive;

//story images

let newspaper;
let endsale;
let id;
let allTheStars;
let whereTheyGo;
let theEnd;


let happenedCheck = false;
let idCheck = false;
let starsCheck = false;
let closerCheck = false;



//creating basic type variable and setting 'click to begin' state
let typing = ``;
let state = `start`;

//creating score/counter variable
let counter = 0;
let counterText = ``;

//creating variables to use to check if a word has been typed already
let lastWord = ``;
let currentWord = ``;

//variables for colour randomization
let r = 100;
let g = 0;
let b = 0;

let textPosition = {
  x: 30,
  y: 30,
  vx: 0.5,
  vy: 0.5,
};

let whatHappenedText = {
  x: 30,
  y: 30,
  vx: 0.5,
  vy: 0.5,
};
//background rectangles
let rectOne = {
  size: 800
};
let rectTwo = {
  size: 600
};
let rectThree = {
  size: 400
};
let rectFour = {
  size: 200
};
let rectFive = {
  size: 100
};

//loading assets
function preload() {
  myFont = loadFont(`assets/fonts/HappyTime copy.otf`);
  doAgain = loadSound(`assets/sounds/doAgain.mp3`);
  dkIce = loadSound(`assets/sounds/dk ice.mp3`);

  briAndSue = loadSound(`assets/sounds/bri and sue 2.mp3`);
  broadest = loadSound(`assets/sounds/broadest.mp3`)
  castleWallWaltz = loadSound(`assets/sounds/castle wall waltz.mp3`)
  pontiac2 = loadSound(`assets/sounds/pontiac2.mp3`)

  dkOne = loadImage(`assets/images/dk1.png`);
  dkTwo = loadImage(`assets/images/dk2.png`);
  dkThree = loadImage(`assets/images/dk3.png`);
  dkFour = loadImage(`assets/images/dk4.png`);
  dkFive = loadImage(`assets/images/dk5.jpg`);

  newspaper = loadImage(`assets/images/newsSprite.png`);
  endsale = loadImage(`assets/images/endofworldSale.png`);
  id = loadImage(`assets/images/id copy.png`);
  allTheStars = loadImage(`assets/images/the stars.png`);
  whereTheyGo = loadImage(`assets/images/closer.png`);
  theEnd = loadImage(`assets/images/the end copy.png`);
}



/**
canvas is created
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
}


/**
checks state of simulation and calls wordTyped(), which checks for a flagged word
*/
function draw() {
  if (state === `start`) {
    start();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `ending`) {
    ending();
  } else if (state === `secretEnding`) {
    secretEnding();
  } else if (state === `whatHappened`) {
    whatHappened();
  } else if (state === `who are you?`) {
    whoAreYou();
  } else if (state === `where is everybody?`) {
    whereIsEverybody();
  } else if (state === `where are you?`) {
    whereAreYou();
  } else if (state === `are we gonna die?`) {
    areWeGonnaDie();
  }

  wordTyped();
}

/*
simulation state - the basic state of the game.
*/
function simulation() {
  background(200, 50, 50);
  myRect();
  words();
  floatyWords();
  floatyWordsTwo();
  staticText();

}

function myRect() {
  rectMode(CORNERS);
  push();
  noStroke();
  fill(r, 50, 10);
  rect(50, 50, width - 50, height - 50, )
  pop();
  push();
  noStroke();
  fill(r, 10, 10)
  rect(100, 100, width - 100, height - 100, )
  pop();
  push();
  noStroke();
  fill(r, 50, 70);
  rect(200, 200, width - 200, height - 200, )
  pop();
  push();
  noStroke();
  fill(r, 50, 40);
  rect(300, 300, width - 300, height - 300, )
  pop();
  push();
  noStroke();
  fill(r, 50, b);
  rect(400, 400, width - 400, height - 400, )
  pop();

}

function words() {
  stroke(0);
  textFont(myFont);
  textSize(100);
  textAlign(CENTER);
  text(typing, width / 2, height / 2);
}


function floatyWords() {
  textSize(30);
  text(`things to discover....`, textPosition.x, textPosition.y)
  push();
  textAlign(RIGHT);
  textSize(15);
  text(`what happened?`, textPosition.x, textPosition.y + 20);
  text(`who are you?`, textPosition.x, textPosition.y + 40)
  text(`where is everybody?`, textPosition.x, textPosition.y + 60)
  text(`where are you?`, textPosition.x, textPosition.y + 80)
  gonnaDieCheck();
  pop();
  move();
  textReset();
}

function gonnaDieCheck() {
  if (happenedCheck === true && idCheck === true && starsCheck === true && closerCheck === true) {
    push();
    textSize(20);
    fill(200);
    noStroke();
    textAlign(CENTER)
    text(`are we gonna die?`, width / 2, height / 2);
    pop();
  }
}

function move() {
  textPosition.x = textPosition.x + textPosition.vx;
  textPosition.y = textPosition.y + textPosition.vy;
}

function floatyWordsTwo() {
  textSize(30);
  text(``, textPosition.x + 10, textPosition.y / 2)
  textPosition.x = textPosition.x + textPosition.vx
  textPosition.y = textPosition.y + textPosition.vy
  textReset();
}


function staticText() {
  textSize(15);
  text(`press down arrow to reset`, width / 2, 800);
}

function keyTyped() {
  r = random(100, 200);
  g = random(0, 100);
  b = random(0, 100);
  stroke(0);
  typing += key;

}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    typing = typing.substring(0, typing.length - 1);
  }
  if (keyCode === DOWN_ARROW) {
    fullReset();
  }
}

function wordTyped() {
  if (typing === `testing`) {
    state = `ending`
  } else if (typing === `donkey kong`) {
    state = `secretEnding`
  } else if (typing === `what happened?`) {
    state = `whatHappened`;
    currentWord = `whatHappened`
    if (currentWord != lastWord) {
      counter += 1;
    }
    typing = ``;
    lastWord = `whatHappened`;
  } else if (typing === `who are you?`) {
    state = `who are you?`
    currentWord = `who are you?`
    if (currentWord != lastWord) {
      counter += 1;
    }
    typing = ``;
    lastWord = `who are you?`;
  } else if (typing === `where is everybody?`) {
    state = `where is everybody?`
    currentWord = `where is everybody?`
    if (currentWord != lastWord) {
      counter += 1;
    }
    typing = ``;
    lastWord = `where is everybody?`;
  } else if (typing === `where are you?`) {
    state = `where are you?`
    currentWord = `where are you?`
    if (currentWord != lastWord) {
      counter += 1;
    }
    typing = ``;
    lastWord = `where are you?`;
  } else if (typing === `are we gonna die?`) {
    state = `are we gonna die?`
    currentWord = `are we gonna die?`
    if (currentWord != lastWord) {
      counter += 1;
    }
    typing = ``;
    lastWord = `are we gonna die?`;
  }
  counterCheck();
  print(state);
}

function ending() {
  background(25, 0, 50);
  acousticSong();
  endingImage();
}

function endingImage() {
  imageMode(CENTER);
  push();
  image(theEnd, width / 2, height / 2);
  pop();
}

function secretEnding() {
  background(100, 0, 150);
  textSize(100);
  text(`donkey kong!`, width / 2, height / 2)
  donkeySong();
  image(dkOne, 400, 30);
  image(dkTwo, 200, 200);
  image(dkThree, 600, 350);
  image(dkFour, 800, 200);
  image(dkFive, 100, 100);
}

function start() {
  push();
  background(0, 50, 200);
  textAlign(CENTER);
  textFont(myFont);
  textSize(40);
  text(`click 2 start`, width / 2, height / 2)
  pop();
}

function acousticSong() {
  if (!doAgain.isPlaying()) {
    doAgain.loop();
    if (state != `ending`) {
      doAgain.stop();
    }
  }
}

function donkeySong() {
  if (!dkIce.isPlaying()) {
    dkIce.loop();
  }
  if (state != `who are you?`) {
    dkIce.stop();
  }
}

function briAndSueSong() {
  if (!briAndSue.isPlaying()) {
    briAndSue.loop();
  }
  if (state != `where is everybody?`) {
    briAndSue.stop();
  }
}

function broadestSong() {
  if (!broadest.isPlaying()) {
    broadest.loop();
  }
  if (state != `whatHappened`) {
    broadest.stop();
  }
}

function castleWallWaltzSong() {
  if (!castleWallWaltz.isPlaying()) {
    castleWallWaltz.loop();
  }
  if (state != `are we gonna die?`) {
    castleWallWaltz.stop();
  }
}

function pontiacSong() {
  if (!pontiac2.isPlaying()) {
    pontiac2.loop();
  }
  if (state != `where are you?`) {
    pontiac2.stop();
  }
}

function mousePressed() {
  if (state === `start`) {
    state = `simulation`;
  }
}

function fullReset() {
  if (keyCode === DOWN_ARROW) {
    state = `simulation`
    simulation();
    typing = ``;
    doAgain.stop();
    dkIce.stop();
    pontiac2.stop();
    briAndSue.stop();
    castleWallWaltz.stop();
    broadest.stop();

  }
}

function textReset() {
  if (textPosition.x > width || textPosition.y > height) {
    textPosition.x = 0
    textPosition.y = 0
  }
}

function whatHappened() {
  push();
  background(0, 50, 200);
  textAlign(CENTER);
  textFont(myFont);
  textSize(40);
  text(`i don't know. i can't remember any meteors, can you?`, width / 2, height / 2)
  pop();
  push();
  textSize(20);
  text(`(press the down arrow)`, width / 2, height - height / 3);
  pop();
  whatHappenedImage();
  counterCheck();
  broadestSong();
  happenedCheck = true;
}

function whatHappenedImage() {
  imageMode(CENTER);
  push();
  scale(0.65, 0.65);
  image(newspaper, width - width / 2, height / 3);
  pop();
  image(endsale, width - width / 4, height / 4)

}


function whoAreYou() {
  push();
  background(0, 50, 200);
  textAlign(CENTER);
  textFont(myFont);
  textSize(40);
  text(`i actually can't remember. i found this, though.
    guess this is me. can't remember what it was like, there.`, width / 2, height / 2)
  pop();
  push();
  textSize(20);
  text(`(press the down arrow)`, width / 2, height - height / 3);
  pop();
  whoAreYouImage();
  donkeySong();
  idCheck = true;
}

function whoAreYouImage() {
  imageMode(CENTER);
  push();
  image(id, width / 2, height / 3);
  pop();
}

function whereIsEverybody() {
  push();
  background(0, 50, 200);
  textAlign(CENTER);
  textFont(myFont);
  textSize(30);
  text(`i don't know. haven't been outside in days. maybe i should go check.
    you go, too.`, width / 2, height / 7)
  text(`can't see a single person.
      can you see that thing in the sky from where you are?`,
    width / 2, height - height / 7);
  pop();
  push();
  textSize(20);
  text(`(press the down arrow)`, width / 2, height - height / 15);
  pop();
  whereIsEverybodyImage();
  briAndSueSong();
  starsCheck = true;
}

function whereIsEverybodyImage() {
  imageMode(CENTER);
  push();
  image(allTheStars, width / 2, height / 2);
  pop();
}

function whereAreYou() {
  push();
  background(0, 50, 200);
  textAlign(CENTER);
  textFont(myFont);
  textSize(40);
  text(`i'm still out here. look at the stars again.`, width / 2, height - height / 7)
  pop();
  push();
  textSize(20);
  text(`(press the down arrow)`, width / 2, height - height / 3);
  pop();
  whereAreYouImage();
  closerCheck = true;
  pontiacSong();
}

function whereAreYouImage() {
  imageMode(CENTER);
  push();
  image(whereTheyGo, width / 2, height / 2);
  pop();
}

function areWeGonnaDie() {
  push();
  background(80, 20, 100);
  textAlign(CENTER);
  textFont(myFont);
  textSize(40);
  text(`yeah. i think so. the sky looks lovely though.
    i know a great place to watch the sun rise.`, width / 2, height / 2)
  pop();
  push();
  textSize(20);
  text(`(press the down arrow)`, width / 2, height - height / 3);
  pop();
  castleWallWaltzSong();
}

function counterCheck() {
  stroke(0);
  text(counter, width / 2, height - height / 5);
  text(`of 5`, width / 2, height - height / 5 + 20)
  if (counter === 5 && state === `simulation`) {
    state = `ending`;
    counter = 5;
  }
}
