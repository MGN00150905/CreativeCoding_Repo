'use strict';

function setup() {
  //Create a canvas with 720 pixels for width and height
  createCanvas(720, 720);
  //Make sure the cursor is not visable whilst over the canvas
  noCursor();

  //Sets the colourmode to HSB instead of RGB
  colorMode(HSB, 360, 100, 100);

  //So that we can draw the rectangles in center mode. So that it will be drawn in the Center of the canvas
  rectMode(CENTER);
  noStroke();
}

function draw() {
  //We divide the y value of the mouse position by 2
  //so that we get all values from 0-360
  background(mouseY / 2, 100, 100);

  //Here we create values from 360 - 0 by substracting 360 from the halved y value
  fill(360 - mouseY / 2, 100, 100);

  //The color field size changed relative to mouses X position. Giving it a colour range of 0-720 pixels
  rect(360, 360, mouseX + 1, mouseX + 1);
}

function keyPressed() {
  //If the s or S key is pressed, it will save a png screanshot to the curreant direcory
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
