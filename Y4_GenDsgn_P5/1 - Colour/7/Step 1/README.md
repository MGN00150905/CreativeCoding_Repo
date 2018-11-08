randomSeed() is something you would use if you wanted to stop the randomness
when the page is refreshed. By default, random() produces different results each time the program is run.
Set the seed parameter to a constant to return the same pseudo-random numbers each time the software is run.

Then we create two colour palettes. Only one palette will display depending on
whether the modulus of i is 1 or 0.

```js
function draw() {
  noLoop();
  randomSeed(actRandomSeed);

  // ------ colors ------
  // create palette
  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(130, 220);
      saturationValues[i] = 100;
      brightnessValues[i] = random(15, 100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(20, 100);
      brightnessValues[i] = 100;
    }
  }

```

We use the counter variable to keep an eye on the number of tiles. We use it in
combination with the modulus operator and colorCount.

Then we start to seperate each line into parts.
Here we are generating an array of random numbers that
will be used to calculate the overall scale of each part.

Another loop is used here to breaking each row into more fragments
going down the y axis. 


```js

  // ------ area tiling ------
  // count tiles
  var counter = 0;
  // row count and row height
  var rowCount = int(random(5, 30));
  var rowHeight = height / rowCount;

  // Seperate each line in parts
  for (var i = rowCount; i >= 0; i--) {
    // how many fragments/parts per line
    var partCount = i + 1;
    var parts = [];

    for (var ii = 0; ii < partCount; ii++) {
      // sub fragments or not?
      if (random() < 0.075) {
        // take care of big values
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (var iii = 0; iii < fragments; iii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

```
