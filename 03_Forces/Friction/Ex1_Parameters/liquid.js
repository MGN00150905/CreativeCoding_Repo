var Liquid = function(_x, _y, _w, _h, _cd){
	this.location = createVector(_x,_y);
	this.width = _w;
	this.height = _h;
	this.drag = _cd;
	this.r = (5);
	this.g = (5);
	this.b = (255);

		this.display = function(){
		fill(this.r,this.g,this.b);
		strokeWeight(1);
		rect(this.location.x,this.location.y, this.width,this.height);//mass = 10, therefore radius is 30
		
	}

	this.contains = function (m){ //m is the mover
		return m.location.y > this.location.y && m.location.y < this.location.y +this.height && 
		m.location.x > this.location.x && m.location.x < this.location.x +this.width;
	}

	this.calculateDrag = function (m) {
		var speed = m.velocity.mag();
		var dragMagniutde = this.drag * speed * speed;

		// Direction is inverse of velocity
		var dragForce = p5.Vector.mult(m.velocity, -1);

		dragForce.Normalize();
		dragForce.mult(dragMagniutde);
		return dragforce;
	}
} 