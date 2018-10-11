# Proof of uniform distribution 

[See the Code in action](code.html)

First of all we have to set variable "Random counts" to an array of objects. Then we create a for loop to make 20 RandomCounts objects and initiate it at 0. 

```js
        var randomCounts = [];
        var total = 20;

        function setup() {
          createCanvas(640,360);
          for (var i = 0; i < total; i++) {
            randomCounts[i] = 0;
          }
        }
```

So the forloop creates 20 object and initiates each of them at 0. Below in our draw setup we floor a random number between 0 and 20. Then we simply add each random number to each object.



```js
        function draw() {
          background(127);
          var index = floor(random(total));
          randomCounts[index]++;
    }
```

Below we see how each rectangle is being generated. First we create a variable for width and we divide it by our 20 objects. (This way, every object will fit the screen) The for loop, loops 20 times and creates a rectangle at every object based on the value of each object at the time.

```js
          var w = width/randomCounts.length;

          for (var x = 0; x < randomCounts.length; x++) {
            rect(x*w,height-randomCounts[x],w-1,randomCounts[x]);
          }
    }
```