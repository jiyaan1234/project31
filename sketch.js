var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function preload(){
  ground = new Ground(600,390,1200,20);
}

function draw() {
  background(255,255,255);  

  for (var k = 0;k>=width;k = k + 80){
    divisionHeight.push(new Divisions(k,height = divisionHeight));
  }

  
  for (var j = 0;k>=width;j = j + 80){
    divisionHeight.push(new Divisions(j,height = divisionHeight));
  }

  for(var j = 40;j<=width; j=j+50){
    plinkos.push(new PLinko(j,75))
  }

  for(var j = 40;j<=width-10; j=j+50){
    plinkos.push(new PLinko(j,75))
  }

  for(var k = 40;k<=width; k=k+50){
    plinkos.push(new PLinko(k,75))
  }

  for(var k = 40;k<=width-10; k=k+50){
    plinkos.push(new PLinko(k,75))
  }

  for(var j =0; j < particles.length; j++){
    particles[j].display();
  }

  for(var k =0; k < particles.length; k++){
    particles[k].display();
  }


  drawSprites();
  ground.display();
}