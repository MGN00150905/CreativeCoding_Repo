We create variables for tile count of x and y position.
Create an array for colours on the left and the right.

We then set our interpolating variable to true.

Shake colours is a function called that is used in further steps.
```js
var tileCountX = 2;
var tileCountY = 10;


var colorsLeft = []
var colorsRight = [];
var colors = [];

var interpolateShortest = true;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();
}
```
The number of gradations tileCountX are determined by the x mouse position.
If the mouseX value is at 0, there will be no gradation to be seen.
The same goes for the number of rows on tileCountY.

So accentually we generate more rows as we move down the y-axis with the mouse
and we generate more gradients of the previous colour as we move our move up the x-axis

```js
function draw() {
  tileCountX = int(map(mouseX, 0, width, 2, 100));
  tileCountY = int(map(mouseY, 0, height, 2, 10));
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;
  var interCol;
  colors = [];

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    var col1 = colorsLeft[gridY];
    var col2 = colorsRight[gridY];

    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var amount = map(gridX, 0, tileCountX - 1, 0, 1);

      if (interpolateShortest) {
        // switch to rgb
        colorMode(RGB);
        interCol = lerpColor(col1, col2, amount);
        // switch back
        colorMode(HSB);
      } else {
        interCol = lerpColor(col1, col2, amount);
      }

      fill(interCol);

      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);

      // save color for potential ase export
      colors.push(interCol);
    }
  }
}

```
