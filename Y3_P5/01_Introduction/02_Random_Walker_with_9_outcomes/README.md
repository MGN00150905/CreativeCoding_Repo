# Random Walker with 9 Outcomes

[See the Code in action](code.html)

In sketch we can see that everything up to here

```js
    this.render = function () {
        stroke(0);
        point(this.x, this.y);
    }
```
Is the exact same as our last sketch. But instead of picking random numbers between 1 and 4, we are now breaking the steps into X and Y directions.



```js
    this.step = function () {
        var stepx = floor(random(-1, 2));
        var stepy = floor(random(-1, 2));

        this.x = this.x + stepx;
        this.y = this.y + stepy;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
```

What we have changed in the step function above if X and Y directions. Instead of flooring a random number between
