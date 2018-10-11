Vectors - Accelaration

Within the Walker class we now have 3 variables. Note that we are using 'this.' before each variable as opposed to 'var'. The reason for this is to make the variable is global(So our sketch file can read it) 'var' is only used for local variables.

We have added accelaration as a vector in order to add speed to our mover.
Notice that we have changed our velocity value to (0,0). This is because we are using accelartion to change the rate of velocity.

```js
var Mover = function(){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.accelaration = createVector(0.02, 0.03);
    }
```


Firstly, our update function adds accelaration to our velociy. Then adds motion and direction to our mover. 

Basically it is redrawing the ellipse in a different frame each time at a crazy high speed. We cannot see the circle being redrawn because it is so quick. Hence, why it gives us this smooth motion.

Notice that we also set a limit to our speed(accelaration) so the speed doesn not carry on increasing.
    
```js
    this.update = function(){
        this.velocity.add(this.accelaration);
        //Give the speed a limit so it doesn't get faster and faster 
        this.velocity.limit(10);
        //Adding motion to the mover in a particular direction      
        this.location.add(this.velocity);
    }
```
