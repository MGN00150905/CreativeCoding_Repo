var position;
var velocity;

function setup() {
    createCanvas(820,820);
    position = createVector(100,100);//create vector for location at top left of canvas
    velocity = createVector(-6, -5);
}

function draw() {
    background(51);

    //add motion to the current position
    position.add(velocity);

    //ellipse cannot leave the canvas on the x or y axis
    if ((position.x > width)||(position.x < 0)){
        velocity.x = velocity.x * -1;
    }

    if ((position.y > width)||(position.y < 0)){
        velocity.y = velocity.y * -1;
    }


    //Start the circle at x an y position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(position.x, position.y, 48, 48);
    
}