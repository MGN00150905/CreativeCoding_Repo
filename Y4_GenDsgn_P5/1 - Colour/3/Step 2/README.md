In Step 2 of this exercise we begin to draw the shape of the circle
or colour fan. We call it a colour fan because the segments of the
colour wheel are arranged in the shape of a fan.

We create a variable for each angle step, assign it to 360 and divide it by segmentCount.

Then we begin the create our colour fan using beginShape() and endShape(). This method draws a
shape step by step using vertex for each step.

TRIANGLE_FAN is a predefined set of shapes in p5 and is used with beginShape().
The individual vertices of the triangle fan are computed by the cosine and sine of the corresponding angle.
We set the fist vertex of the shape to be in the centre of the canvas.    

Using a for loop we can loop through each angle up to 360 and we add angleStep to angle upon each iteration.

Circles are measured in degrees in the real world [0-360]. Where as in the world of computing we measure in
radians(0-2π).
Angle needs to be converted into radians because the function cos() and sin() need it to be inputted this way.
```js
  var angleStep = 360 / segmentCount;

  beginShape(TRIANGLE_FAN);
  vertex(width / 2, height / 2);

  for (var angle = 0; angle <= 360; angle += angleStep) {
    var vx = width / 2 + cos(radians(angle)) * radius;
    var vy = height / 2 + sin(radians(angle)) * radius;
    vertex(vx, vy);
    fill(angle, mouseX, mouseY);
  }

  endShape();
}
```

Then we simply assign vx and vy to the vertex() function.
The Hue of this colour wheel changes depending on the angle value.
The saturation of this colour wheel changes depending on the mouseX position.
The brightness of this colour wheel changes depending on the mouseY position.
