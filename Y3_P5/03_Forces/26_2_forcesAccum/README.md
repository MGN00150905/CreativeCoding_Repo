Forces - Wind Accumilation

This time we are adding force to accelaration 


```js
    this.applyForce = function(force){
        this.accelaration.add(force);
    }
```

We have to multiply to accumalate!

```js
    this.update = function(){
        this.velocity.add(this.accelaration);
        this.velocity.limit(10); 
        this.location.add(this.velocity);
        this.accelaration.mult(0);
    }
```