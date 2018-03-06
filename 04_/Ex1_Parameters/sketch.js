var mover;
var liquid;

function setup(){
    createCanvas(screen.width,500);

  
    mover = new Mover(200, 100, 1, 2, 0.1, 0.3, 20);


    liquid = new Liquid(100,100,200,200,1);
}

function draw(){

	console.log("john");
    background(30);

		//var wind = createVector(random(-0.2,0.7),0);
		//var gravity = createVector(0,0.4 * movers[i].mass);

		//var c = 0.2;
		//var normal = 1;
		//var frictionMag = c * normal;
		//var friction = p5.Vector.mult(movers[i].velocity, -1);

		//friction.normalize();
		//riction.mult(frictionMag);

	    //movers[i].applyForce(friction);
	    // movers[i].applyForce(wind);
	    // movers[i].applyForce(gravity);

		liquid.display();

	    if(liquid.contains(mover)){
	    	console.log ("mover is in liquid");
	    	//liquid.calculateDrag(mover);
	    }

	    mover.checkEdges();
	    mover.update(); 
	    mover.display();

}