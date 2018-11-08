The constrain function is what constrains a value between a minimum
and a maximum value.

So we are limiting the mouse coordinates to the canvas.

Then we map mX and mY and assign them to currentTileCountX and Y.
We get the tileWidth by dividing the width of the canvas into currentTileCountX.
Same goes for tileHeight.

```js

function draw() {
  background(0, 0, 100);


  var mX = constrain(mouseX, 0, width);
  var mY = constrain(mouseY, 0, height);

  // tile counter
  var counter = 0;

  // map mouse to grid resolution
  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
  var tileWidth = width / currentTileCountX;
  var tileHeight = height / currentTileCountY;

```
Now we start to generate rows on the x and y axis by using a nested
for loop.

Then we fill each tile with the arrays of random HSB colour components,
passing index as a parameter. Index is used to count the tiles.

```js

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

```
Finally, we create the rectangle giving its X and Y position and giving it the
size of tileWidth and tileHeight.

We increment the counter so it loops through each tile.
