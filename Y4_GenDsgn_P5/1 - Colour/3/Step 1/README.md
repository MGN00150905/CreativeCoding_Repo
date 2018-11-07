In this exercise we are going to generate a colour wheel
to better understand the colour arrangement in HSB mode.

Here, we will be able to control the number of segments in the circle
as well as its saturation and brightness values depending on where the mouse
position is.

This first step in this exercise is to assign variables for the amount of \
segments in the circle as well as the radius.


```js
var segmentCount = 360;
var radius = 300;

function setup() {
  createCanvas(800, 800);
  noStroke();
}
```

After creating the canvas we assign the colorMode to HSB,
making saturation equal to width and brightness equal to height.

The 'width' and 'height' variables contain the width and height of the
display window as defined in the createCanvas() function.
```js
function draw() {
  colorMode(HSB, 360, width, height);
  background(360, 0, height);


}

```
