Vectors - Array of movers

The only changes we are making here is in our sketch file.

The reason we do not have to change our mover class is because that class only makes changes to the individual object. If we want to create an array of movers we are to create more objects in our sketch file.

Firstly, we changer are mover variable to 'movers' and make it an array.

Then we wrap the code where we instantiated an object with a for loop.

```js
var movers = [];
var countMovers = 20;

function setup() {
    createCanvas(820,820);

    for(var i = 0; i < countMovers; i++){
        movers[i] = new Mover();
    }
}
```

We also have to put all our function calls into a for loop. It is highly significant that we add [i] to each function as an index.

```js
function draw() {
    background(51);
    for(var i = 0; i < countMovers; i++){
        movers[i].update(); //movement
        movers[i].render(); //makes the mover appear
        movers[i].container(); //check edged function
    }
}
```



