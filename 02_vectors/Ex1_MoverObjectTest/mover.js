function Mover(){
	this.location = createVector(Math.floor(random(width)),Math.floor(random(width)));

	this.velocity = createVector(3,2);

	this.acceleration = createVector(Math.floor(random(width)),Math.floor(random(height)) );

	this.render = function(){
		noStroke();
		fill(177);
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