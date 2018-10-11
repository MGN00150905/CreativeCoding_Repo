var mover;

function setup() {
    createCanvas(820,820);
    mover = new Mover();
}

function draw() {
    background(51);

    var wind = createVector(0.1, 0.01);

    mover.applyForce(wind);

    mover.update(); //movement
    mover.render(); //makes the mover appear
    mover.container(); //check edged function
    
}