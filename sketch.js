const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var en,w,ob
var bg
function preload(){
bg=loadImage("images/bg.png")
}

function setup() {
  createCanvas(1200,400);
  en=Matter.Engine.create()
  wd=en.world;

  angleMode(DEGREES)
  
ground=new Ground(600,390,1200,20)
platform=new Ground(150,305,300,150)
  box1=new Box(700,320)
 box2=new Box(920,320)
 box3=new Box(700,240)
 box4=new Box(920,240)

 pig1=new Pig(810,320)
pig2=new Pig(810,220)

 bird1=new Bird(100,100)

 log1=new Log(820,260,300,90)
 

 shoot=new Shoot(bird1.body,{x:250,y:70})
}

function draw() {
  background(bg);
  Matter.Engine.update(en)  
  fill ("brown")


box1.display()
box2.display()
box3.display()
box4.display()

ground.display()
platform.display()
pig1.display()
pig2.display()

bird1.display()

log1.display()

shoot.display()

}

function mouseDragged(){
  Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY} )
}

function mouseReleased(){
  shoot.fly()
}






