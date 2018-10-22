At first we create a canvas and assign its width and height values.
We then make the cursor invisible while over the canvas.

The colorMode() function is used to change the numerical range used
for specifying colours and to switch colour systems.
It takes 3 parameters as ranges for each value(HSB, H, S, B).
There are two colour modes RGB or HSB, that correspond to Red, Green, Blue and Hugh, Saturation and Brightness

```js
'use strict';

function setup() {
  createCanvas(720, 720);
  noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(mouseY / 2, 100, 100);

  fill(360 - mouseY / 2, 100, 100);
  rect(360, 360, mouseX + 1, mouseX + 1);
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
```



As an overall, the x value of the mouse position defines the size of the colour field (Ranging from 0 - 720).
Whereas the y value defines the hue.

Using the keyPressed function we capture a png of the canvas any time the 's' or 'S' key is pressed.
