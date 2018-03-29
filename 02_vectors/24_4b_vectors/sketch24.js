var movers = [];
var countMovers = 20;

function setup() {
    createCanvas(820,820);

    for(var i = 0; i < countMovers; i++){
        movers[i] = new Mover();
    }
}

function draw() {
    background(51);
    for(var i = 0; i < countMovers; i++){
        movers[i].update(); //movement
        movers[i].render(); //makes the mover appear
        movers[i].container(); //check edged function
    }
}