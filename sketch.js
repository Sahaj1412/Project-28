const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj, boy;
var treeObj,launcherObj,stoneObj;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var world, engine;


function preload()
{
	boy = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

    treeObj = new Tree(1050, 580);
    launcherObj = new Launcher(stoneObj.body,{x:235,y:420});
    mango1 = new Mango(1100,100,30);
    mango2 = new Mango(1170, 130, 30);
    mango3 = new Mango(1010, 140, 30);
    mango4 = new Mango(1000, 70, 30);
    mango5 = new Mango(1100, 70, 30);
    mango6 = new Mango(1000, 230, 30);
    mango7 = new Mango(900, 230, 40);
    mango8 = new Mango(1140, 150, 40);
    mango9 = new Mango(1100, 230, 40);
    mango10 = new Mango(1200, 200, 40);
    mango11 = new Mango(1120, 50, 40);
	groundObj = new Ground(width/2,600,width,20);

    var render = Render.create({
        element: document.body,
        engine: engine,
        options:{
            width: 1300,
            height: 600,
            wireframes: false
        }

    });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);

  image("boy",200,340,200, 300);
  fill(0);
  text("Press Space to play again!", 650, 300);
  
  groundObj.display();
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  launcherObj.display();
  
    detectcollision(stoneObj, mango1);
    detectcollision(stoneObj, mango2);
    detectcollision(stoneObj, mango3);
    detectcollision(stoneObj, mango4);
    detectcollision(stoneObj, mango5);
    detectcollision(stoneObj, mango6);
    detectcollision(stoneObj, mango7);
    detectcollision(stoneObj, mango9);
    detectcollision(stoneObj, mango10);
    detectcollision(stoneObj, mango11);
}

function MouseDragged(){
    Matter.body.setPosition(stoneObj.body, {x: mouseX, y:mouseY});
}

function MouseReleased(){
    launcherObj.fly();
}

function keyPressed(){
    if(keyCode === 32){
        document.location.reload();
    }
}

function detectcollision(ostone,omango){
    mangoBodyPos = omango.body.position;
    stoneBodyPos = ostone.body.position;

    var distance = dist(mangoBodyPos.x, mangoBodyPos.y, stoneBodyPos.x, stoneBodyPos.y);

    if(distance<=omango.r+ostone.r){
        Matter.body.setStatic(omango.body,false);
    }
}