var mover = [];
var amount = 200;

function setup(){
	createCanvas(1000,500);

	for(var i=0; i < amount; i++){
		mover[i] = new Mover();
	}
}

function draw(){
	background(0,0,0,40);

	for(var i=0; i < amount; i++){
	mover[i].prison();
	mover[i].update();
	mover[i].render();
	}
}