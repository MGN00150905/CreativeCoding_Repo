[See the Code in action](code.html)

Similar to the last sketch we are creating an object but this time we are making a number of walkers. We simply do this by creating a new variable for the number of walkers and then we say in a for loop, if i is less than the number of walkers, then create walkers. In this case we will have 16 walkers.

```js
    function setup() {
      createCanvas(1200, 800);
      noOfWalkers = 16;
      walkers = []

      for(var i = 0; i < noOfWalkers; i++){
        walkers[i] = new Walker();
      }
      background(127);
    }
```

In our walker class we have to create vectors for X and Y so that each walker can move in any direction. In our render function, we map the radius so that each walker has a different size.

We use the map funciton again for X and Y positions in our step function so thatour walkers dont just move directly sideways or up and down. So basically each walker is moving on the X and Y at the same time. This is why the walkers are moving ina curve like way.



```js
    function Walker(){

      this.position = createVector(width/2, height/2);
      this.nOff = createVector(random(1000), random(1000));

      this.render = function(){
        noStroke();
        fill(258);
        ellipse(this.position.x, this.position.y, 
        map(noise(this.nOff.x), 0, 1, 20, 200),
        map(noise(this.nOff.x),0,1,20,200))  
      }

      this.step = function(){
        this.position.x = map(noise(this.nOff.x),0,1,0,width + 200);
        this.position.y = map(noise(this.nOff.y),0,1,0,height + 200);
        this.nOff.add(0.005, 0.005);
      }
    }
```

Our draw function is very similar to our last sketch. The only difference is that we are using a for loop as there is more than one walker being drawn onto the canvas.

```js
    function draw(){
      fill(0,15);
      rect(0,0,width,height);

      for(var i = 0; i < noOfWalkers; i++){
        walkers[i].step();
        walkers[i].render();    
      }  

    }
```