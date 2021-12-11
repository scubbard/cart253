/**
what type of song is this? prototype
code by georgie
*/

"use strict";
let myFont;
let doAgain;
let dkIce;

//donkey kong images
let dkOne;
let dkTwo;
let dkThree;
let dkFour;
let dkFive;

//story images
let closer;
let calendar;
let comingToFindYou;
let endOfWorldSale;
let id;
let newsSprite;
let theEnd;
let theStars;

//creating basic type variable and setting 'click to begin' state
let typing = ``;
let state = `start`;

//creating score/counter variable
let counter = 0;
let counterText = ``;

//creating variables to use to check if a word has been typed already
let lastWord = ``;
let currentWord = ``;

let dialog = ``;
let dialogOne;
let dialogTwo;

let lastState = ``;

let showpaper = false

//variables for colour randomization
let r = 100;
let g = 0;
let b = 0;

let textPosition = {
  x: 30,
  y: 30,
  vx: 2,
  vy: 2,
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
  myFont = loadFont(`assets/HappyTime.otf`);
  doAgain = loadSound(`assets/sounds/doAgain.mp3`);
  dkIce = loadSound(`assets/sounds/dk ice.mp3`);

  dkOne = loadImage(`assets/images/dk1.png`);
  dkTwo = loadImage(`assets/images/dk2.png`);
  dkThree = loadImage(`assets/images/dk3.png`);
  dkFour = loadImage(`assets/images/dk4.png`);
  dkFive = loadImage(`assets/images/dk5.jpg`);

  closer = loadImage(`assets/images/closer.png`);
  calendar = loadImage(`assets/images/calendar.png`);
  comingToFindYou = loadImage(`assets/images/coming to find you copy.png`);
  endOfWorldSale = loadImage(`assets/images/endofworldSale.png`);
  id = loadImage(`assets/images/id copy.png`);
  newsSprite = loadImage(`assets/images/newsSprite.png`);
  theEnd = loadImage(`assets/images/the end copy.png`);
  theStars = loadImage(`assets/images/the stars.png`);

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
  }
  if (state === `chapterOne`) {
    chapterOne();
  }
  if (state === `ending`) {
    ending();
  }
  if (state === `endingTwo`) {
    endingTwo();
  }
  if (state === `endingThree`) {
    endingThree();
  }
  if (state === `whoYou`) {
    whoAreYou();
  }
  if (state === `whoI`) {
    whoAmI();
  }
  if (state === `whereWe`) {
    whereAreWe();
  }
  if (state === `whatThis`) {
    whatIsThis();
  }

  wordTyped();
}

/*
simulation state - the basic state of the game.
*/
function chapterOne() {
  background(200, 50, 50);
  myRect();
  words();
  staticText();
  chapterOneText();
  lastState = `chapterOne`;
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
  }
  if (typing === `theo boehm`) {
    state = `endingTwo`
  }
  if (typing === `donkey kong`) {
    state = `endingThree`
  }
  if (typing === `who are you`) {
    state = `whoYou`;
    currentWord = `whoAreYou`
    if (currentWord != lastWord) {
      counter += 1;
    }
    typing = ``;
    lastWord = `whoAreYou`;
  }
  if (typing === `who am i`) {
    state = `whoI`
    currentWord = `whoAmI`
    if (currentWord != lastWord) {
      counter += 1;
    }
    typing = ``;
    lastWord = `whoAmI`;
  }
  if (typing === `where are we`) {
    state = `whereWe`
    currentWord = `whereAreWe`
    if (currentWord != lastWord) {
      counter += 1;
    }
    typing = ``;
    lastWord = `whereAreWe`;
  }
  if (typing === `what is this`) {
    state = `whatThis`
    currentWord = `whatIsThis`
    if (currentWord != lastWord) {
      counter += 1;
    }
    typing = ``;
    lastWord = `whatIsThis`;
  }
  counterCheck();
  print(state);
}

function ending() {
  background(20, 0, 50);
  push();
  imageMode(CENTER);
  image(theEnd, width / 2, height / 2);
  pop();
  textSize(100);
  //text(`wahoo!`, width / 2, height / 2)
  acousticSong();
}

function endingTwo() {
  background(250, 200, 0);
  textSize(100);
  text(`theo!`, width / 2, height / 2)
  acousticSong();
}

function endingThree() {
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
  text(`chapter one.`, width / 2, height / 2 - 60);
  text(`click 2 start`, width / 2, height / 2);
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
  if (state != `endingThree`) {
    dkIce.stop();
  }
}


function mousePressed() {
  if (state === `start`) {
    state = `chapterOne`;
  }
}

function fullReset() {
  if (keyCode === DOWN_ARROW) {
    state = `start`
    typing = ``;
    doAgain.stop();
    dkIce.stop();
    showpaper = false;
    lastWord = ``;
  }
}

function lastStateCheck() {
  if (lastState = `chapterOne`) {
    chapterOne();
  }
}

function chapterOneText() {
  push();
  stroke(0);
  fill(200, 150, 0);
  textSize(30);
  if (lastWord != `yes`){
  text(`hello? you there?`, width / 2, height / 2);
  }
  pop();
  chapterOneCheck();
};

function chapterOneCheck() {
  if (dialog = `dialogOne` && typing === `yes` || lastWord === `yes`) {
    text(`thank god. you haven't heard, have you? take a look at this.`);
    newspaper();
    lastWord = `yes`
    showpaper = true;
  } else if (typing === `what happened?` || lastWord === `what happened?`) {
    endSale();
    lastWord = `what happened?`
  }
}

function textReset() {
  if (textPosition.x > width || textPosition.y > height) {
    textPosition.x = 0
    textPosition.y = 0
  }
}



function newspaper() {
  push();
  typing = ``
  if (showpaper = true) {
    imageMode(CENTER);
    scale(0.75, 0.75);
    image(newsSprite, width - width / 3, height);
  }
  pop();
  push();
  stroke(0);
  fill(220, 170, 0);
  textSize(30);
  text(`take a look at this...`, width / 2, height / 5);
  pop();
  nextText();
}

function endSale() {
  push();
  imageMode(CENTER);
  image(endOfWorldSale, width / 2, height / 2);
  stroke(0);
  fill(200, 150, 0);
  textSize(30);
  text(`i don't know. i found this. i can't remember any meteor, can you?`, width / 2, height / 5);
  pop();
}

function nextText() {
  text(`press down arrow to continue...`, width / 2, height - height / 7);
  if (keyCode === RIGHT_ARROW) {
    lastWord = ``
    showpaper = false;
  };
}

function whoAreYou() {
  push();
  background(0, 50, 200);
  textAlign(CENTER);
  textFont(myFont);
  textSize(40);
  text(`i'm me. who are you?`, width / 2, height / 2)
  pop();
  push();
  textSize(20);
  text(`(press the down arrow)`, width / 2, height - height / 3);
  pop();
  counterCheck();
}

function whoAmI() {
  push();
  background(0, 50, 200);
  textAlign(CENTER);
  textFont(myFont);
  textSize(40);
  text(`that's a silly question, you should know that.`, width / 2, height / 2)
  pop();
  push();
  textSize(20);
  text(`(press the down arrow)`, width / 2, height - height / 3);
  pop();
}

function whereAreWe() {
  push();
  background(0, 50, 200);
  textAlign(CENTER);
  textFont(myFont);
  textSize(40);
  text(`i'm not sure. i was hoping you could tell me.`, width / 2, height / 2)
  pop();
  push();
  textSize(20);
  text(`(press the down arrow)`, width / 2, height - height / 3);
  pop();
}

function whatIsThis() {
  push();
  background(0, 50, 200);
  textAlign(CENTER);
  textFont(myFont);
  textSize(40);
  text(`i don't know. i'm kind of scared. i don't know how long i've been here.`, width / 2, height / 2)
  pop();
  push();
  textSize(20);
  text(`(press the down arrow)`, width / 2, height - height / 3);
  pop();
}

function counterCheck() {
  push();
  stroke(0);
  fill(200, 150, 0);
  textSize(20);
  text(counter, width / 2, height - height / 5);
  text(`of 5`, width / 2, height - height / 5 + 20)
  pop();
  if (counter === 5) {
    state = `ending`;
    counter = 0;
  }
}
