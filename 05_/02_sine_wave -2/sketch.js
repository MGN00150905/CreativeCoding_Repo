var startAngle = 0;
var angelVel = 0.3;

function setup(){
	createCanvas(640, 480);
    background(255);
}

function draw(){
	background(220,2)
	
	//draw batton
	stroke(0);
	fill(55);
    
    startAngle += 0.015;
    var angle = startAngle;
    
    for(var x = 0; x <= width; x+=10){

	var y = map(sin(angle), -1,1,0,height);

    ellipse(x,y,20,20);
    
    angle += angelVel;
        
    }
}