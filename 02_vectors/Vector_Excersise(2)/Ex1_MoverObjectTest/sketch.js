var mover = [];

function setup(){
	createCanvas(1000,500);

	for(var i=0; i < 2000; i++){
		mover[i] = new Mover();
	}
}

function draw(){
	background(51);

	for(var i=0; i < 2000; i++){
	mover[i].prison();
	mover[i].update();
	mover[i].render();
	}
}