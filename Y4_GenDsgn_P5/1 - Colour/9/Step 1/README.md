Here is again, similar to the last exercise only now we define a gradient that goes from black to white,
as the fill style for the rectangle.

Once again making the rows overlap eachother.    
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
