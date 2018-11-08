Here we start off with a quick loop to get the total of all parts.

We then use mapping to scale from the part length relative to the sumPartsTotal, to 0 - width

```js
// add all subparts
var sumPartsTotal = 0;
for (var ii = 0; ii < partCount; ii++) {
  sumPartsTotal += parts[ii];
}

// draw rects
var partsPosition = 0;
for (var ii = 0; ii < parts.length; ii++) {
  partsPosition += parts[ii];

  var x = map(partsPosition, 0, sumPartsTotal, 0, width);
  var y = rowHeight * i;
  var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
  var h = rowHeight;
```
  This makes sure that the index selected will always be in the range
  of colorCount even if the counter exceeds that number

```js

  var index = counter % colorCount;
  var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
  fill(col);
  rect(x, y, w, h);

  counter++;
}
}
}

```
