var Mover = function(){
    this.location = createVector(30,30);
    this.velocity = createVector(0,0);
    this.accelaration = createVector(0,0);

    this.radius = 170;
    this.r = 255;
    this.g = 255;
    this.b = 255;

    this.render = function(){
        stroke(150);
        strokeWeight(2);
        fill(random(this.r),random(this.g) , random(this.b));

        //Draw an ellipse at this.location (random)
        ellipse(this.location.x,this.location.y,random(this.radius),random(this.radius));

    }

    this.update = function(){
        //adding speed to our velocity
        this.velocity.add(this.accelaration);
        //Give the speed a limit so it doesn't get faster and faster 
        this.velocity.limit(10);
        //Adding motion to the mover in a particular direction      
        this.location.add(this.velocity);
        this.accelaration.mult(0);
    }

    this.container = function(){
        if(this.location.x < 0 || this.location.x > width){
            this.velocity.x = this.velocity.x * -1;
        }

        if(this.location.y < 0 || this.location.y > height){
            this.velocity.y = this.velocity.y * -1;
        }
    }

    this.applyForce = function(force){
        this.accelaration.add(force);
    }


}