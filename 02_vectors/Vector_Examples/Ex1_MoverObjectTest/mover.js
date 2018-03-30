function Mover(){
	this.location = createVector(Math.floor(random(width)),Math.floor(random(height)));

	this.velocity = createVector(3,3);

	this.acceleration = createVector(0.02,0.02);

	this.render = function(){
		stroke(0);
		strokeWeight(1)
		fill(177,155,200);
		ellipse(this.location.x,this.location.y,10,10)

	}

	this.update = function(){
		this.velocity.add(this.acceleration);
		this.location.add(this.velocity);
	}

	this.prison = function(){
		if(this.location.x < 0 || this.location.x > width){
			this.velocity.x = this.velocity.x * -1;
		}

		if(this.location.y < 0 || this.location.y > height){
			this.velocity.y = this.velocity.y * -1;
		}
	}


}