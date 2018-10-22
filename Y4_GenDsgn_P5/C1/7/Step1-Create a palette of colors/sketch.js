//Puts it in strict mode, so for example you cannot use undefined variables
'use strict';

var colourCount = 20;

//Colour values
var hueValue = [];
var saturationValue = [];
var brightnessValue = [];
var actRandomSeed = 0;

function setup(){
  //Create a canvas the size of the screen
  //Use HSB colors instead of RGB
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw(){
  noLoop();
  randomSeed(actRandomSeed);

  //create palette of colours
  for(var i = 0; i < colourCount; i++){
    if (i % 2 == 0) {
      hueValue[i] = random(130, 220);
      saturationValue[i] = 100;
      brightnessValue[i] = random(15, 100);
    } else {
      hueValue[i] = 195;
      saturationValue[i] = random(20, 100);
      brightnessValue[i] = 100;
      console.log(hueValue);
    }
  }
}
