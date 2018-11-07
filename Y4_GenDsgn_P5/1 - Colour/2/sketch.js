
'use strict';
//Create variables for X and Y mouse positions.
var stepX;
var stepY;

//Create canavas the size of screen.
//Using HSB colour mode. In this case hue and saturation are assigned to height and width.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, height, width, 100);
}

//Adding 2 to both variables to prevent them from being too small.
//If we never added to the variables it would take longer to display.
function draw() {
  stepX = mouseX + 3;
  stepY = mouseY + 3;

//Loops Y position of the rectangle to be drawn is defined by gridY
  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
