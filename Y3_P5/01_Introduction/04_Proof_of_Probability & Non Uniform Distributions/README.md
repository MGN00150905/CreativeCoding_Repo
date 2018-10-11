# Random Walker with 9 Outcomes

[See the Code in action](code.html)

In sketch we can see that everything up to here

```js
    this.render = function () {
        stroke(0);
        point(this.x, this.y);
    }
```

Just like in sketch two. We are using are walker class to create a walker object and implementing the 'step' and 'render' classes in our draw function. 



```js
      this.step = function() {
        var probArray = [];
        probArray[1] = 1;
        probArray[2] = 1;
        probArray[3] = 2;
        probArray[4] = 3;
        probArray[5] = 3;

        var index = floor(random(probArray.length));
        var r = probArray[index];
    }
```

We have changed around our step function a little. We made this array so that there is 40% chance that the instance number (r) will be 1 or 3. There is 20% chance that it will be 2.

```js
      this.step = function() {
        var probArray = [];
        probArray[1] = 1;
        probArray[2] = 1;
        probArray[3] = 2;
        probArray[4] = 2;
        probArray[5] = 3;

        var index = floor(random(probArray.length));
        var r = probArray[index];
    }
```

From this example above we can see that there is 40% chance that the instance number (r) will be 1 or 2. There is 20% chance that it will be 3.