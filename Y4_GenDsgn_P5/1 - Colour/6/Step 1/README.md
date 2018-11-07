Here we are making an array for each HSB colour value.
Hue, Saturation and Brightness.

We assign colorMode to HSB giving all components the max values.

For every tile on the x axis we assign its HSB values to be random.
```js
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

```
