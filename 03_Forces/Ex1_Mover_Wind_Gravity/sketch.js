var movers = [];
var rats = 20;

function setup(){
    createCanvas(screen.width,500);

    for(var i =0; i<rats;i++){
        movers[i] = new Mover(Math.floor(random(10,40)));
    }
}

function draw(){
    background(30);
    
    for(var i=0;i<rats;i++){

		var wind = createVector(random(-0.2,0.7),0);
		//Multiply by the mass of each mover object. So that gravity seems realistic
		var gravity = createVector(0,0.4 * movers[i].mass);

		var c = 0.2;
		var normal = 1;
		var frictionMag = c * normal;
		var friction = p5.Vector.mult(movers[i].velocity, -1);

		friction.normalize();
		friction.mult(frictionMag);

	    // movers[i].applyForce(friction);
	    movers[i].applyForce(wind);
	    movers[i].applyForce(gravity);
	    movers[i].checkEdges();
	    movers[i].update(); 
	    movers[i].display();
	}

}