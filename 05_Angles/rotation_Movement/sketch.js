var angle = 0;
var aVelocity = 0;
var aAccelaration = 0.3;

function setup(){
	createCanvas(640, 480)
}

function draw(){
	background(220)
	
	//draw batton
	stroke(0);
	fill(127);

	push();
	translate(width/2, height/2)//move the batton
	rotate(angle); //rotate function runs on every frame
	line(-60,0,60,0);
	ellipse(60,0,16,16);
	ellipse(-60,0,16,16);
	pop(); 
	/*Push and pop functions resets the 
	grid to normal after tranlating the grid system 
	with (0, 0) starting in the center. */

	

	aVelocity = aVelocity + aAccelaration;
	aVelocity = constrain(aVelocity, 0, 0.1);
	/* Limits the magnitude of this vector to the value used - which is 1 */
	angle = angle + aVelocity;

	console.log(angle);

}