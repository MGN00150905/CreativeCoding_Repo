
'use strict';

var stepX;
var stepY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, height, width, 100);
}

function draw() {
  stepX = mouseX + 1;
  stepY = mouseY + 1;

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
