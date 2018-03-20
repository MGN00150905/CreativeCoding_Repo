var startAngle = 0;
var angelVel = 0.3;

function setup(){
	createCanvas(640, 480);
    background(255);
}

function draw(){
	background(220,4)
	
	//draw batton
	stroke(0);
	fill(55);
    
    startAngle += 0.015;
    var angle = startAngle;

	var y = map(sin(angle), -1,1,0,height);
    
    ellipse(width/2,y,20,20);
    
    angle += angelVel;
}