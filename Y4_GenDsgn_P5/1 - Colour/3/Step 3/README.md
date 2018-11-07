Now that our colour wheel is created and the HSB colours are changing
depending on mouse movement, we can now change the segment count of the
colour wheel by pressing keys.

With the keyPressed function we can use a switch statement that changes the
segment count of the circle depending of which key is pressed.

This can give us a better understanding of how the program actually works. 

```js
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  switch (key) {
  case '1':
    segmentCount = 360;
    break;
  case '2':
    segmentCount = 45;
    break;
  case '3':
    segmentCount = 24;
    break;
  case '4':
    segmentCount = 12;
    break;
  case '5':
    segmentCount = 6;
    break;
  }
}

```
