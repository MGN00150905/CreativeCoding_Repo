In our sketch file we have declared a variable for our mover. We instantiate a new object for our mover.

After this we will have to create our mover object in a defferent file.

Below our functions that are called from the mover class. There are 3 functions altogether. 
Update - For movement
Render - To display the mover
Container - To make sure our mover never leaves the canvas

```js
var mover;

function setup() {
    createCanvas(820,820);
    mover = new Mover(); //Instantiate new mover object
}

function draw() {
    background(51);

    mover.update(); //movement
    mover.render(); //makes the mover appear
    mover.container(); //check edged function
    
}
```

Within the Walker class we have two variables. Note that we are using 'this.' before each variable as opposed to 'var'. The reason for this is to make the variable is global(So our sketch file can read it) 'var' is only used for local variables.

```js
var Mover = function(){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(8,5);
    }
```

Below is our set of 3 functions used for our mover. These functions only work if they are called in the sketch file. 

Our render fucntion is simply drawing a circle on the canvas at a random location.

```js
    this.render = function(){
        stroke(150);
        strokeWeight(2);
        fill(0, 0, 255);

        //Draw an ellipse at this.location (random)
        ellipse(this.location.x,this.location.y,20,20);

    }
```

Our update function adds motion and direction to our mover. Basically it is redrawing the ellipse in a different frame each time at a crazy high speed. We cannot see the circle being redrawn because it is so quick. Hence, why it gives us this smooth motion.
    
```js
    this.update = function(){
        this.location.add(this.velocity);
    }
```

We have seen this sort of function previously, where we tell our mover to change the direction of its velocity if it touches any part of the canvas.

```js

    this.container = function(){
        if(this.location.x < 0 || this.location.x > width){
            this.velocity.x = this.velocity.x * -1;
        }

        if(this.location.y < 0 || this.location.y > height){
            this.velocity.y = this.velocity.y * -1;
        }
    }

```
