function Mover(mass){
	this.location = createVector(3,4);
	this.velocity = createVector(3,2);
	this.acceleration = createVector(0,0);
	this.mass = mass;
	
	this.angle= 0;
	this.aVelocity= 0;
	this.aAccelaration= 0.001;

	this.render = function(){
	

		push();
		stroke(150);
		strokeWeight(2);
		fill(24); 

		translate(this.location.x, this.location.y);
		rotate(this.angle);
		rectMode(CENTER);
		rect(0,0,this.mass * 10, this.mass * 10);
		pop();

	}

	this.update = function(){
		this.velocity.add(this.acceleration);
		this.location.add(this.velocity);


		this.aAccelaration = this.velocity.x/100;

		this.aVelocity += this.aAccelaration;
		this.aVelocity = constrain(this.aVelocity,-0.05,0.05);
		this.angle += this.aVelocity;
	}

	this.checkEdges = function(){
		if(this.location.x < 0 || this.location.x > width){
			this.velocity.x = this.velocity.x * -1;
		}

		if(this.location.y < 0 || this.location.y > height){
			this.velocity.y = this.velocity.y * -1;
		}
	}


}