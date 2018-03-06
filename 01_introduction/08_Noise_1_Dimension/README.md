x1# Random Walker with 9 Outcomes

[See the Code in action](code.html)

In our setup with declare a walker object

```js
    function setup() {
          createCanvas(1200, 800);

          walker = new Walker();
          background(127);
        }
    }
```

In the walker class, there are two functions. The render function simply displays the ecclipse with all its assoociated styles. Our step function is with makes the walker move (Re-drwa itself).  

Notice the ecclipse is only movies sideways because we only have it moving on the x axis. The walker is moving sideways at a speed of any number between 0 and 1000. We set this.xOff to more than or equal to 0.005 in order to get the 'swoosh background' of the ellipse.



```js
      function Walker(){

          this.x = width/2;
          this.xOff = random(1000);

          this.render = function(){
            noStroke();
            fill(258);
            ellipse(this.x, 500, 40, 40)
          }

          this.step = function(){
            this.x = map(noise(this.xOff),0,1,0,width);
            this.xOff += 0.005;
          }
        }
    }
```

In our draw function we simply create a black background and call our to walker functions, step and render. These functions need to be called in the draw function in the correct order to work.

```js
    function draw(){
          fill(0,15);
          rect(0,0,width,height);
          walker.step();
          walker.render();
    }   
```
