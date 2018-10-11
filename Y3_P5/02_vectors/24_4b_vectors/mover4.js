var Mover = function(){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(3,3);
    this.accelaration = createVector(); //

    this.render = function(){
        stroke(150);
        strokeWeight(2);
        fill(0, 0, 255);

        //Draw an ellipse at this.location (random)
        ellipse(this.location.x,this.location.y,20,20);

    }


    this.update = function(){
        var mouse = createVector(mouseX, mouseY);

        this.accelaration = p5.Vector.sub(mouse, this.location);
        this.accelaration.setMag(0.2);

        //adding speed to our velocity
        this.velocity.add(this.accelaration);
        //Give the speed a limit so it doesn't get faster and faster 
        this.velocity.limit(10);
        //Adding motion to the mover in a particular direction      
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