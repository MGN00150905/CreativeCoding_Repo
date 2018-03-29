in this sketch we are giving the ellipse two vector values, one for position and the other for velocity or speed.

```js
var position;
var velocity;

function setup() {
    createCanvas(820,820);
    position = createVector(100,100);//create vector for location at top left of canvas
    velocity = createVector(2, 2);
}
```

Here we add motion and speed to the current position by adding our velocity value to the location of the ellipse

```js
    position.x = position.x + velocity.x;
    position.y = position.y + velocity.y;
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
