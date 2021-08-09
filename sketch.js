const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




function preload(){
  bg=loadImage("package.png")
  snowFlakesImg=loadImage("package.png")
  boyRunning=loadAnimation("package.png")
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  boy=Bodies.circle(400, 200, 50, 50);
  World.add(world,boy)

 
}

function draw() {
  background(bg);
  imageMode(CENTER)
  image(boyRunning ,boy.position.x,boy.position.y,40,40);
  drawSprites();
}