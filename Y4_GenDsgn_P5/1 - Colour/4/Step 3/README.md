Here we are also exporting an ASE file as well as a PNG file.
The ASE file is what stores the swatch of colours that was stored the the variable interCol.

If you click into the code you will see how we wrote colors.push(interCol),
we then reference 'colors' while writing the file.

We are also giving the opportunity to switch between colour modes RGB and HSB.

```js
function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') interpolateShortest = true;
  if (key == '2') interpolateShortest = false;
}

```
