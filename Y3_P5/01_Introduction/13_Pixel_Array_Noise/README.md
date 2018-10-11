We need to set pixel density to 1 so we can clearly see each pixel

```js
    function steup(){
      createCanvas(400, 400);
      pixelDensity(1);
    }
```

Here we are using a nested loop. Loop through each Y value. Then for each Y value, loop through each X value.

Then we clculate the index by using the formula. 

Notice now that we create a variable called bright. We set it to a random number between 0 and 255. this will make ever pixel change very quicly as we see it. As a result it gives us this white noise look. Such as an old analogue TV with no signal.

```js
    function draw(){
      loadPixels();

      for(var y = 0; y < height; y++){
        for (var x = 0; x< width; x++){
          var index = (x+y*width)*4
          var bright = random(255);
            pixels[index+0] = bright;
            pixels[index+1] = bright;
            pixels[index+2] = bright;
            pixels[index+3] = 255;
        }
      }

      updatePixels();

    }
```