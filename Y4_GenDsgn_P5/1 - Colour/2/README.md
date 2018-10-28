COLOUR SPECTRUM IN A GRID

In this sketch we generate a mad amount of coloured triangles.
Each tile is assigned a hue and saturation value.
Hue on the horizontal axis and saturation the other.
The main colours in the spectrum can be seen more clearly
by enlarging the rectangles.

we start off by assigning

```js

  var stepX;
  var stepY;

  function setup() {
    createCanvas(800, 400);
    noStroke();
    colorMode(HSB, width, height, 100);
  }

  function draw() {
    stepX = mouseX + 3;
    stepY = mouseY + 3;

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

```
