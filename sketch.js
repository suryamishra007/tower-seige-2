const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box;
var launcher;
var polygon;


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

    ground1 = new Ground(500,500,250,20)
    ground2 = new Ground(800,300,250,20)

    box1 = new Box(500,450,50,50)
    box2 = new Box(525,450,50,50)
    box3 = new Box(550,450,50,50)
    box4 = new Box(450,450,50,50)
    box5 = new Box(475,450,50,50)

    box6 = new Box(500,425,50,50)
    box7 = new Box(525,425,50,50)
    box8 = new Box(475,425,50,50)
    
    box9 = new Box(500,400,50,50)


    box10= new Box(800,275,50,50)
    box11= new Box(775,275,50,50)
    box12= new Box(825,275,50,50)
    box13= new Box(850,275,50,50)
    box14= new Box(750,275,50,50)

    box15= new Box(800,250,50,50)
    box16= new Box(825,250,50,50)
    box17= new Box(775,250,50,50)
    
    box18= new Box(800,225,50,50)

    polygon = new Polygon(100,400,50)

    launcher = new SlingShot(polygon.body,{x:100,y:350});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  box15.display();
  box16.display();
  box17.display();

  box18.display();

  polygon.display();

  launcher.display();


  drawSprites();
 
}
function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    launcher.fly();
}
function keyPressed()
{
  if(keyCode === 32)
  {
    Matter.Body.setPosition(polygon.body,{x:150,y:550})
    launcher.attach(polygon.body)
  }
}




