
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var dust1 , dust2 , dust3;
var grnd;
var ballImg , dustImg;

function preload()
{
	
}

function setup() {
	createCanvas(950, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(20, 300 ,100);

	dust1=new dustbin(750,360,170,200);
	
	grnd=new ground(475,465,950,10);

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ball.display();
  dust1.display();
 
   grnd.display();

   

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === 32 ){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:85,y:85});

	}
}


