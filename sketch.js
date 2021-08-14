
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;


function preload()
{
	ground = new ground(width/2, 600, width, 20);
	leftSide = new ground(875, 457, 15, 45);
	rightSide = new ground(900, 457, 15, 45);
}

function setup() {
	createCanvas(800, 700, 1000, 500);


	engine = Engine.create();
	world = engine.world;



	ball.circle(300, 350, 3);
	var ball_options={
    isStatic = false,
	restitution = 0.9,
	frictionAir = 0,
    density = 1.2
	}

   World.add(ball, world);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  if (key_down(UP_ARROW)){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.07, y:0});
  }
  drawSprites();
 
}



