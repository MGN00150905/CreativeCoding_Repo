var Mover = function(){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(8,5);

    this.render = function(){
        stroke(150);
        strokeWeight(2);
        fill(0, 0, 255);

        //Draw an ellipse at this.location (random)
        ellipse(this.location.x,this.location.y,20,20);

    }

    //Adding motion to the mover in a particular direction
    this.update = function(){
        this.location.add(this.velocity);
    }

    this.container = function(){
        if(this.location.x < 0 || this.location.x > width){
            this.velocity.x = this.velocity.x * -1;
        }

        if(this.location.y < 0 || this.location.y > height){
            this.velocity.y = this.velocity.y * -1;
        }
    }


}