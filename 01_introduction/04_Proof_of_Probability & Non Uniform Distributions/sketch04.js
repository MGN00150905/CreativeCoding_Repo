
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 35309b70fafaa9ab1f315e60145c884aa836a1aa
