
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function setup() {
  createCanvas(640, 360);
  background(127);
}

function draw(){
  var xloc = randomGaussian();
  var yloc = randomGaussian();
  console.log(xloc);
  console.log(yloc);

  var xsd = 100;
  var ysd = 60;

  var xmean = width / 2;
  var ymean = height / 2;

  xloc = (xloc * xsd) + xmean;
  yloc = (yloc * ysd) + ymean;

  var rColor = 222;
  var cColor = 111;

  fill(rColor);
  noStroke();
  ellipse(xloc, yloc, 16, 16);
  fill(cColor);
  ellipse(xloc, yloc, 10, 10);
}