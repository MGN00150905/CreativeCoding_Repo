Same as the last sketch we are giving the ellipse two vector values, one for position and the other for velocity or speed.

```js
var position;
var velocity;

function setup() {
    createCanvas(820,820);
    position = createVector(100,100);//create vector for location at top left of canvas
    velocity = createVector(2, 2);
}
```

There is a built in funciton in p5 to add something to somthing else, in this case we are adding velocity to position.

```js
    position.add(velocity);
```

We then set a simple if loop for both x and y. Here we make sure the ellipse never leaves the canvas.
    
```js
    if ((position.x > width)||(position.x < 0)){
        velocity.x = velocity.x * -1;
    }

    if ((position.y > width)||(position.y < 0)){
        velocity.y = velocity.y * -1;
    }

```
