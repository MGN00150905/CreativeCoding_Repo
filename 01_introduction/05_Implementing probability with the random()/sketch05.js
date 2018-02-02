
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
var walker;

function setup() {
    createCanvas(320, 640);
    background(127);
    walker = new Walker();
}

function draw() {
    walker.render();
    walker.step();
}

function Walker() {
  this.x = width/2;
  this.y = height/2;

  this.render = function() {
    stroke(0);
    point(this.x, this.y);
  };
  this.step = function() {
    var probArray = [];
    probArray[1] = 1;
    probArray[2] = 1;
    probArray[3] = 2;
    probArray[4] = 3;
    probArray[5] = 3;

    var index = floor(random(probArray.length));
    var r = probArray[index];

    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, width - 1);
    
  };
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

funciton setup() {
  createCanvas(640, 360);
  background(127);
}

function draw(){
  var xloc = randomGaussian();
  console.log(xloc);

  var sd = 60;
  var mean = width / 2;
  xloc = (xloc * sc) + mean;

  fill(0,10);
  noStroke();
  ellipse(xloc, height / 2, 16, 16);
}