Forces - Wind

Working off our mover class from Vectors, what we want to do now is apply a force.

First we need to create a function in our mover class. Force is being passed as a parameter here.


```js
    this.applyForce = function(force){
        this.accelaration = force;
    }
```

This wind vector will blow the mover object to the right hand side of the canvas. 

The reason for this is because the x value is the hight value which means the mover will travel along the x-axis to the right. Notice it will move downward slightly as well because of the y value.

We then call our 'applyForce' function while passing wind as a parameter to see the storm in action.

```js
	function draw() {
	    background(51);

	    var wind = createVector(0.1, 0.01);

	    mover.applyForce(wind);

	    mover.update(); //movement
	    mover.render(); //makes the mover appear
	    mover.container(); //check edged function
	    
	}
```