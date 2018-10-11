var movers = [];

function setup() {
    createCanvas(screen.width, 500);
    for(var i = 0; i < 20; i++){
        movers[i] = new Mover;
    }
}

function draw() {
    background(55);

    for(var i = 0; i < 20; i++){
    movers[i].checkEdges();
    movers[i].update();
    movers[i].display();
    }
}