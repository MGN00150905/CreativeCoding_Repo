var theta= 0;
var period = 60;
var amplitude = 10;

function setup(){
	createCanvas(640, 480);
    background(255);
}

function draw(){
	background(220)
	
	//draw batton
	noStroke();
	fill(0, 100);
    ellipse(x,y,20,20);
    
    startAngle += 0.015;
    var angle = startAngle;
    
    for(var x = 0; x <= width; x+=10){

	var y = map(sin(angle), -1,1,0,height);


    
    angle += angelVel;
    
    var fc = frameCount;
    console.log("framecount = ", fc);
        
    }
}