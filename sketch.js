
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	// any images
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 10, 800, 20);
	
	// d is the diameter of each ball
	var d = 160;

	bob3 = new Bob(400, 500, d/2);
	bob2 = new Bob(400 - d, 500, d/2);
	bob1 = new Bob(400 - (2*d), 500, d/2);
	bob4 = new Bob(400 + d, 500, d/2);
	bob5 = new Bob(400 + (2*d), 500, d/2);
	/*
	bob2 = new Bob(400 - d/2, 500, d/2);
	bob1 = new Bob(400 - d, 500, d/2);
	bob4 = new Bob(400 + d/2, 500, d/2);
	bob5 = new Bob(400 + d, 500, d/2);
	*/

	rope3 = new Rope(bob3.body, roof.body, 0, 0, d/4);
	rope2 = new Rope(bob2.body, roof.body, -d, 0, d/4);
	rope1 = new Rope(bob1.body, roof.body, -(2*d), 0, d/4);
	rope4 = new Rope(bob4.body, roof.body, d, 0, d/4);
	rope5 = new Rope(bob5.body, roof.body, (2*d), 0, d/4);
	/*
	rope2 = new Rope(bob2.body, roof.body, -d/2, 0, d/4);
	rope1 = new Rope(bob1.body, roof.body, -d, 0, d/4);
	rope4 = new Rope(bob4.body, roof.body, d/2, 0, d/4);
	rope5 = new Rope(bob5.body, roof.body, d, 0, d/4);
	*/

	Engine.run(engine);
}


function draw() {
  //rectMode(CENTER);
  background(255);
  roof.display();
  bob3.display();
  bob2.display();
  bob1.display();
  bob4.display();
  bob5.display();
  rope3.display();
  rope2.display();
  rope1.display();
  rope4.display();
  rope5.display();
  drawSprites();
}


function keyPressed() {
	//console.log("key pressed")
	if (keyCode === UP_ARROW) {
		//console.log("key pressed is up arrow")	
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:160, y:150});
	}	
		
}

