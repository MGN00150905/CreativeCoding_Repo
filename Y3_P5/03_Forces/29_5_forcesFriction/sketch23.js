var mover;

function setup() {
    createCanvas(820,820);
    mover = new Mover();
}

function draw() {
    background(51);

    mover.update(); //movement
    mover.render(); //makes the mover appear
    mover.container(); //check edged function
    
}