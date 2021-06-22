var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples() {
apple = createSprite(random(50,350),40,10,10)
// create apple image
apple.addImage(AppleImg);
//scale the rabit if required
apple.scale = 0.05
// move apples downward
apple.velocityY = -5; 
//life time for apples
apple.lifetime = 40;



}








