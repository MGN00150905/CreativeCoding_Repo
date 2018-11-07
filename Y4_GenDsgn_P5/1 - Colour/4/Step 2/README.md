This function will change the colours on the Y axis toa diferent colour.
Therefore changing the colours on the x axis.

For colorsLeft and colorsRight, we are changing the colours to random values.
Notice that some colour values will be change with a range of randomness.( random(0, 60) )  

```js
function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}

function mouseReleased() {
  shakeColors();
}

```
When the mouse is released after clicking, the shakeColors function will initiate.
