# Implementing probability with random()

[See the Code in action](code.html)

Just like in sketch two. We are using are walker class to create a walker object and implementing the 'step' and 'render' classes in our draw function. 



```js
         this.step = function() {
            var choice = floor(random(4));
            var r = random(1);
            //40% still moving to the right
            if(r < 0.4){
              this.x++;
            }else if (r < 0.6){
              this.x--;
            }else if (r < 0.8){
              this.y++;
            }else{
              this.y--;
            }
            this.x = constrain(this.x, 0, width - 1);
            this.y = constrain(this.y, 0, width - 1);
```



From this step function above we see that there is 40% chance that our walker will movie to the right. Our random number (r) is floating between 0 and 1. Therefore there is a higher chance that it will go right as opposed to up, down or left.