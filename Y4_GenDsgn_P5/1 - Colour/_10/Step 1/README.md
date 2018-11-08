Using a central gradient on the tiles.

```js
function centerGradient(x1, y1, r1, x2, y2, r2, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  var cx = x1 + (x2 - x1) / 2;
  var cy = y1 + (y2 - y1) / 2;
  var grd = ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
	ctx.fillStyle = grd;
	ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}

```

Here we are also creating a new x and y position for each rectangle.

```js
var w = map(parts[ii], 0, sumPartsTotal, 0, width);
var h = rowHeight * 1.5
var px1 = map(sumPartsNow, 0, sumPartsTotal, 0, width);
var px2 = px1 + w;
var py1 = rowHeight * i;
var py2 = py1 + h;
```
