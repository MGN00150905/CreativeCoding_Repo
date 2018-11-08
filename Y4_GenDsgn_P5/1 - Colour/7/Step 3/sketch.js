
'use strict';

var colorCount = 20;

//HSB component arrays
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

//Stop randomness
var actRandomSeed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

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

  // ------ area tiling ------
  // count tiles
  var counter = 0;
  // row count and row height
  var rowCount = int(random(5, 30));
  var rowHeight = height / rowCount;

  // seperate each line in parts
  for (var i = rowCount; i >= 0; i--) {
    // how many fragments
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

    // add all subparts
    var sumPartsTotal = 0;
    //Quick loop to add all parts to get the total.
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }

    // draw rects
    var partsPosition = 0;
    for (var ii = 0; ii < parts.length; ii++) {
      partsPosition += parts[ii];

      //we then use mapping to scale from the part length relative to the sumPartsTotal
      //To 0 - width
      var x = map(partsPosition, 0, sumPartsTotal, 0, width);
      var y = rowHeight * i;
      var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
      var h = rowHeight;

      //This makes sure that the index selected will always be in the range
      // of colorCount even if the counter exceeds that number
      var index = counter % colorCount;
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      fill(col);
      rect(x, y, w, h);

      counter++;
    }
  }
}

function mouseReleased() {
  actRandomSeed = random(100000);
  loop();
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}
