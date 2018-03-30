var mover;
var liquid;
var liquid1;
var liquid2;

function setup(){
    createCanvas(screen.width,500);

  
    mover = new Mover(200, 100, 4, 4, 0.1, 0.3, 20);


    liquid = new Liquid(0,0,canvas.width,canvas.height/3,0.9);
    liquid1 = new Liquid(0,170,canvas.width,canvas.height/3,0.1);
    liquid2 = new Liquid(0,340,canvas.width,canvas.height/3,0.9);
}

function draw(){
    background(30);

		//var wind = createVector(random(-0.2,0.7),0);
		var gravity = createVector(0,0.4 * mover.mass);

		//var c = 0.2;
		//var normal = 1;
		//var frictionMag = c * normal;
		//var friction = p5.Vector.mult(movers[i].velocity, -1);

		//friction.normalize();
		//riction.mult(frictionMag);

	    //movers[i].applyForce(friction);
	    //movers[i].applyForce(wind);
	    mover.applyForce(gravity);

		liquid.display();
		liquid1.display();
		liquid2.display();

	    if(liquid.contains(mover)){
	    	console.log (drag);
	    	var drag = liquid.calculateDrag(mover);
	    	mover.applyForce(drag);

	    }else if(liquid1.contains(mover)){
	    	console.log (drag);
	    	var drag = liquid1.calculateDrag(mover);
	    	mover.applyForce(drag);

	    }else if(liquid2.contains(mover)){
	    	console.log (drag);
	    	var drag = liquid2.calculateDrag(mover);
	    	mover.applyForce(drag);

	    }

	    mover.checkEdges();
	    mover.update(); 
	    mover.display();

}