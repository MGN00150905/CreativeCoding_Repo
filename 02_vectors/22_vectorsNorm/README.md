In this sketch we jump straight to the draw function.

Creating a vector for mouse coordinates.
We also create a vector for the center of the canvas.


Similar to the last sketch only we are now subtracting 
the center from the mouse location.

The line will always be drawn from the center of the cavas to the mouse


```js
    var mouse = createVector(mouseX, mouseY);
    var center = createVector(width/2, height/2);
    var vectorLine = mouse.sub(center);
```

We use the normalize function to standardise or normalise our vector to what is called a unit vector.
Lets say a standard vector has a length of 1. We use the normalize function to set any length vector to the standard(1) without changing the vectors direction.

We have to multiply the vectorline by 50 because we normalised our vector line to a single vector unit.

```js
    vectorLine.normalize();
    vectorLine.mult(50);
```

Here we need to translate the canvas so the line is in the center
as opposed to starting at the top left.

    
```js
    translate(width/2, height/2)
    stroke(0);
    strokeWeight(2);
    fill(127);
    line(0, 0, vectorLine.x, vectorLine.y);

```
