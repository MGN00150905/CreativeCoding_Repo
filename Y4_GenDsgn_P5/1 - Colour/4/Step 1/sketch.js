//step1
'use strict';
//amount of tiles for each axis
var tileCountX = 1;
var tileCountY = 2;

//Color arrays
var colorsLeft = []
var colorsRight = [];
var colors = [];
//Will be used later on to swap from RGB and HSB
var interpolateShortest = true;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();
}

//Mapping the range of mouseX from (0 - width) to the range of (2, 100)
//Mapping the range of mouseY from (0 - height) to the range of (2, 10)
function draw() {
  tileCountX = int(map(mouseX, 0, width, 2, 100));
  tileCountY = int(map(mouseY, 0, height, 2, 10));
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;
  var interCol;
  colors = [];

//Generating grid on y-axis
//Assign colours on right and left to their colours array
  for (var gridY = 0; gridY < tileCountY; gridY++) {
    var col1 = colorsLeft[gridY];
    var col2 = colorsRight[gridY];

//Mapping the amound to be interpolated between the two colours on x-axis
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var amount = map(gridX, 0, tileCountX - 1, 0, 1);

//Blend two colours together to find a third in between
//For RGB and HSB
      if (interpolateShortest) {
        // switch to rgb
        colorMode(RGB);
        interCol = lerpColor(col1, col2, amount);
        // switch back
        colorMode(HSB);
      } else {
        interCol = lerpColor(col1, col2, amount);
      }

//Fill with swatch of interpolated colours
//The way that colours are interpolated depends on the current color mode.
      fill(interCol);

//Creat rectangles
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);

      // save color for potential ase export
      colors.push(interCol);
    }
  }
}

function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}

function mouseReleased() {
  shakeColors();
}

function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') interpolateShortest = true;
  if (key == '2') interpolateShortest = false;
}
