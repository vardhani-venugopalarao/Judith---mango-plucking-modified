/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;*/
var mango1,mango2,mango3,mango4,mango5;
var stone;
var tree;
var ground;
var boy;
function preload()
{
  //Don't preload this boy image here. You need to create a boy class and then do it.
	 boy=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
	image(boy, 200,155,20,20);
	engine = Matter.Engine.create();
	world = engine.world;

  stone=new Stone(50,155,10);
	
  //create rest of objects
  mango1=new Mango(500,200);
  mango2=new Mango(450,250);
  mango3=new Mango(400,350);
  mango4=new Mango(550,320);
  mango5=new Mango(650,330);
  tree=new Tree(500,400);
  //Create a ground class first to use the below statement to create an object
  //ground=new Ground(400,680,800,10);
	Matter.Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  stone.display();
  tree.display();
  // you need to create boy class and preload the image in constructor and then call this
  //boy.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();


  
 
  detectCollision(stone, mango1);
  
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  //create ground class first and then uncomment this.
  //ground.display();
  
  drawSprites();
}


function detectCollision(lstone,lmango){
 
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r)
    {
      Matter.Body.setStatic(lmango.body,false)
    }
}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
    launcherObject.attach(stoneObj.body);
  }
}





