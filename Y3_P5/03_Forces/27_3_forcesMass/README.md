Vectors - Random Accelaration of the mouse

We have added accelaration as a vector only this time we are using a built in function to make the accelaration totally random. Simply by multiplying accelaration by a particular value. 

Within the Walker class we now have 3 variables. Note that we are using 'this.' before each variable as opposed to 'var'. The reason for this is to make the variable is global(So our sketch file can read it) 'var' is only used for local variables.


```js
var Mover = function(){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.accelaration = createVector(0.02, 0.03);
    }
```



