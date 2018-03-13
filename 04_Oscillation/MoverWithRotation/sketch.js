var mover;

function setup(){
	createCanvas(1000,500);


	mover = new Mover(10);
	
}

function draw(){
	background(51);

	mover.checkEdges();
	mover.update();
	mover.render();
	
}