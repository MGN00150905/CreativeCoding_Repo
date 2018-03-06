We need to set pixel density to 1 so we can clearly see each pixel

```js
    function steup(){
      createCanvas(400, 400);
      pixelDensity(1);
    }
```

Here we are using a nested loop. Loop through each Y value. Then for each Y value, loop through each X value.

Then we clculate the index by using the formula. 

```js
    function draw(){
      loadPixels();

      for(var y = 0; y < height; y++){
        for (var x = 0; x< width; x++){
          var index = (x+y*width)*4
            pixels[index+0] = 255;
            pixels[index+1] = 0;
            pixels[index+2] = 0;
            pixels[index+3] = 255;
        }
      }

      updatePixels();

    }
```