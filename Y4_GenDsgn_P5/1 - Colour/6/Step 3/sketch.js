// Step 3


'use strict';

var tileCountX = 50;
var tileCountY = 10;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  // init with random values
  for (var i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

function draw() {
  // white back
  background(0, 0, 100);

  // limit mouse coordinates to canvas
  var mX = constrain(mouseX, 0, width);
  var mY = constrain(mouseY, 0, height);

  // tile counter
  var counter = 0;

  // map mouse to grid resolution
  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
  var tileWidth = width / currentTileCountX;
  var tileHeight = height / currentTileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      var index = counter % currentTileCountX;

      // get component color values
      fill(hueValues[index], saturationValues[index], brightnessValues[index]);
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }
}

function keyPressed() {
  //Save screenshot
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    var colors = [];//array for colour swatch
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
  //3 arrays are filled with random values. This means any can appear on the palette
  if (key == '1') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(100);
      brightnessValues[i] = random(100);
    }
  }
  //Result of palette dominated by bright colours as brightness is always maxed (100)
  if (key == '2') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }
  //No pastal tones created as saturation is always at max value
  if (key == '3') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }
  //Hue and Saturation set to 0 which will give a black & white effect
  if (key == '4') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 0;
      saturationValues[i] = 0;
      brightnessValues[i] = random(100);
    }
  }
  //Displays a very blue-ish theme
  if (key == '5') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 195;
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }
  //Displays a reddish theme
  if (key == '6') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 195;
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }
  //Hue is only ranged from the first half of the colour wheel, giving it a warm theme
  if (key == '7') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(180);
      saturationValues[i] = random(80, 100);
      brightnessValues[i] = random(50, 90);
    }
  }
  //Hue is randomly ranged from the second half of the colour wheel giving it a colder effect
  if (key == '8') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(180, 360);
      saturationValues[i] = random(80, 100);
      brightnessValues[i] = random(50, 90);
    }
  }
  //Mixing two colour palettes, Display first palette if 0 remains.
  //Display second palette if 1 remains
  if (key == '9') {
    for (var i = 0; i < tileCountX; i++) {
      if (i % 2 == 0) {
        hueValues[i] = random(360);
        saturationValues[i] = 100;
        brightnessValues[i] = random(100);
      } else {
        hueValues[i] = 195;
        saturationValues[i] = random(100);
        brightnessValues[i] = 100;
      }
    }
  }
  //Mixing two colour palettes, Display first palette if 0 remains.
  //Display second palette if 1 remains  if (key == '0') {
    for (var i = 0; i < tileCountX; i++) {
      if (i % 2 == 0) {
        hueValues[i] = 140;
        saturationValues[i] = random(30, 100);
        brightnessValues[i] = random(40, 100);
      } else {
        hueValues[i] = 210;
        saturationValues[i] = random(40, 100);
        brightnessValues[i] = random(50, 100);
      }
    }
  }

}
