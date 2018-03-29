Vectors - Accelaration towards the mouse

We have added accelaration as a vector only this time we have have not given it a value.

Within the Walker class we now have 3 variables. Note that we are using 'this.' before each variable as opposed to 'var'. The reason for this is to make the variable is global(So our sketch file can read it) 'var' is only used for local variables.


```js
var Mover = function(){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(3,1);
    this.accelaration = createVector(); //
```

Here we want the mover to be orbitting around the mouse vector.

First we create our mouse variable which gets the mouse coordinates. Then we make our accelaration to 'mouse' minus 'the location of the mover.'

We then we set our magnitude the get a particular speed

```js
this.update = function(){
        var mouse = createVector(mouseX, mouseY);

        this.accelaration = p5.Vector.sub(mouse, this.location);
        this.accelaration.setMag(0.2);

        //adding speed to our velocity
        this.velocity.add(this.accelaration);
        //Give the speed a limit so it doesn't get faster and faster 
        this.velocity.limit(10);
        //Adding motion to the mover in a particular direction      
        this.location.add(this.velocity);
    }

```




