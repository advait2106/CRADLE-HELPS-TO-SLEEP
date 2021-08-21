var bob;
var roof;
var chain;
var bob,roof;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  if(spaceKeyIsPressed(bob(isHitting).chain));
  
  drawSprites();
 
  createSprites.bob(65,75,10,30);
  createSprites.chain(30,15,5,25);
  createSprites.roof(60,90,70,35);
  createSprites.bob,roof(125,165,80,55);

  bob.display();
  chain.display();
  roof.display();
  bob,roof();
}



