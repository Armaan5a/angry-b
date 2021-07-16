const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function preload(){
    back=loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,520,70,70);   
    box2=new Box(920,520,70,70);
    box3=new Box(580,520,70,70);
    box4=new Box(580,540,70,70);
    box5=new Box(810,430,80,80)
    box6=new Box(810,400,70,70)
    ground=new Ground(600,height,1200,30);    
    pi = new Pig (700,450,)
    pi2 = new Pig (920,450)
    pi3 = new Pig (810,520)
    pi4 = new Pig (580,420)
    lo = new Log(810,490,300,PI/2)
    lo1 = new Log(810,420,300,PI/2)
    lo2 = new Log(760,390,150,PI+45)
    lo3 = new Log(860,390,150,PI-45)
    lo4 = new Log(580,430,300,PI/2)
    bird = new Bird(100,100)
}

function draw(){
    background(back);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display()
    box4.display()
    ground.display();
    pi.display()
    pi2.display()
    lo.display()
    lo1.display()
    box5.display()
    pi3.display()    
    box6.display()
   lo2.display()
   lo3.display()
   lo4.display()
   bird.display()
   pi4.display()
}