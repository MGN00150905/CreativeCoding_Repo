# Random Walker with 9 Outcomes

[See the Code in action](code.html)

First we get a random Gaussian number. This number will have a mean of 0 and standard deviation of 1.


```js
        function draw(){
          var xloc = randomGaussian();
          console.log(xloc);
    }
```

We set our standard deviation to 60 and our mean to width/2 (Center of canvas on x-axis). Then we scale the random gaussian number by by our standard deviation and mean.

Finally we draw the ellipse and the centre. and declare a size.



```js
          var sd = 120;
          var mean = width / 2;
          xloc = (xloc * sd) + mean;

          fill(0,10);
          noStroke();
          ellipse(xloc, height / 2, 16, 16);
    }
```

