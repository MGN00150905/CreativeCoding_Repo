We need to set pixel density to 1 so we can clearly see each pixel
We set variable 'yoff' to 1000.0, think of this as a random moment in time offset by an amount.

```js
var yoff = 1000.0;

function setup(){
      frameRate(1);
      createCanvas(1000, 800);
      pixelDensity(1);
      noiseDetail(10);
    }
```

Here we are using a nested loop. Loop through each Y value. Then for each Y value, loop through each X value.

Then we clculate the index by using the formula. 

Now our bright variable is our random moments in time for X and Y mapped to values between 0 and 255.

```js
    function draw(){
      loadPixels();

      for(var y = 0; y < height; y++){
        var xoff = 100.0;
        for (var x = 0; x< width; x++){
          var index = (x+y*width)*4
          var bright = map(noise(xoff, yoff), 0, 1, 0, 255);
            pixels[index+0] = bright;
            pixels[index+1] = bright;
            pixels[index+2] = bright;
            pixels[index+3] = 255;

            xoff += 0.002;
        }
        yoff += 0.002;
      }
      updatePixels();

    }
```

Then we increment the values for xoff and yoff. The smaller the number is, the smoother it looks.