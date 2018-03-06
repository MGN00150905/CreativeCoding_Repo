var x = 320;
var y = 180;
var xspeed = 2;
var yspeed = 2;

function setup() {
    createCanvas(820,820);
    img = loadImage("din.jpg"); 
}

function draw() {
    background(51);

    // add the current speee to the position.
    x = x + xspeed;
    y = y + yspeed;


    if((x > width) || (x <0)){
        xspeed = xspeed * -1;
    }
    if((y > width) || (y <0)){
        yspeed = yspeed * -1;
    }

    //Display circle at x position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(x, y, 48, 48);
    image(img, x, y);
    
}