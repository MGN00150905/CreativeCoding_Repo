var Mover = function(_x, _y, _vx, _vy, _ax, _ay, _m){
	this.location = createVector(_x, _y);
	this.velocity = createVector(_vx, _vy);
	this.accelaration = createVector(_ax, _ay);
	this.mass = _m;
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