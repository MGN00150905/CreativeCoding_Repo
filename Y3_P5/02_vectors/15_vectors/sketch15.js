var x = 320;
var y = 180;
var xspeed = 2;

function setup() {
    createCanvas(320,640);
}

function draw() {
    background(51);

    // add the current speee to the position.
    x = x + xspeed;


    if((x > width) || (x <0)){
        xspeed = xspeed * -1;
    }

    //Display circle at x position
    stroke(0);
    strokeWeight(2);
    fill(222);
    ellipse(x, 180, 48, 48);
    
}