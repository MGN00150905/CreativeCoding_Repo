var Mover = function(mass){
	this.location = createVector(Math.floor(random(width)),Math.floor(random(height)));
	this.velocity = createVector(0,0);
	this.accelaration = createVector(0.1,0.1);
	this.mass = mass;
	this.r = random(255);
	this.g = random(255);
	this.b = random(255);


	this.display = function(){
		fill(this.r,this.g,this.b);
		strokeWeight(1);
		ellipse(this.location.x,this.location.y, this.mass*3,this.mass*3);//mass = 10, therefore radius is 30
		
	}

	this.update = function(){
		this.velocity.add(this.accelaration);
		this.velocity.limit(10);
		this.location.add(this.velocity);
		this.accelaration.mult(0);
		
	}

	this.checkEdges = function(){
		if(this.location.x < 0 || this.location.x > width){
			this.velocity.x = this.velocity.x * -1;
		}
		if(this.location.y < 0 || this.location.y > height){
			this.velocity.y = this.velocity.y * -1;
		}
	}

	this.applyForce = function(force){
		var f = p5.Vector.div(force, this.mass);
		this.accelaration.add(f);
	}
}