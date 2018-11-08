Here, we are doing the same as the last exercise only now we are adding a
gradient to the colours. Passing x,y,w,h parameters for the rectangle shape.

Also passing c1 and c2. These are the two colours that will make the gradient.

The type of gradient we are using here is linear gradient.

```js
function gradient(x, y, w, h, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  var grd = ctx.createLinearGradient(x, y, x, y + h);
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
	ctx.fillStyle = grd;
	ctx.fillRect(x, y, w, h);
}

```

Here we are giving more effect to the gradient by
making the rows overlap each other.

```js
  var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
  var y = rowHeight * i;
  var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
  var h = rowHeight * 1.5;
```
