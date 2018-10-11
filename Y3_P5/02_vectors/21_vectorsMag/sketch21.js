function setup() {
    createCanvas(820,820);
}

function draw() {
    background(51);

    //creating a vector for mouse coordinates
    var mouse = createVector(mouseX, mouseY);

    //Vector for the center
    var center = createVector(width/2, height/2);

    //Same as last sketch only we are now subtracting 
    //the center from the mouse location.
    //The line will always be drawn from the center of the cavas to the mouse
    var vectorLine = mouse.sub(center);

    //Here we are using the mag function to 
    //get the length of the vector(Otherly know as magnitude)
    //This evidentally shows the length of our vector using 
    //a rectangle at the top of the canvas.
    var m = vectorLine.mag();
    fill(255);
    stroke(0);
    rect(0,0,m,10);




    //Here we need to translate the canvas so the line is in the center
    //as opposed to starting at the top left.
    translate(width/2, height/2)
    stroke(0);
    strokeWeight(2);
    fill(127);
    line(0, 0, vectorLine.x, vectorLine.y);    
}