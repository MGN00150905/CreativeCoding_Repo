var walkers;
var noOfWalkers;

function setup() {
  createCanvas(1200, 800);
  noOfWalkers = 16;
  walkers = []

  for(var i = 0; i < noOfWalkers; i++){
    walkers[i] = new Walker();
  }
  background(127);
}

function draw(){
  fill(0,15);
  rect(0,0,width,height);

  for(var i = 0; i < noOfWalkers; i++){
    walkers[i].step();
    walkers[i].render();    
  }  

}

function Walker(){

  this.position = createVector(width/2, height/2);
  this.nOff = createVector(random(1000), random(1000));

  this.render = function(){
    noStroke();
    fill(258);
    ellipse(this.position.x, this.position.y, 
    map(noise(this.nOff.x), 0, 1, 20, 200),
    map(noise(this.nOff.x),0,1,20,200))  
  }

  this.step = function(){
    this.position.x = map(noise(this.nOff.x),0,1,0,width + 200);
    this.position.y = map(noise(this.nOff.y),0,1,0,height + 200);
    this.nOff.add(0.005, 0.005);
  }
}