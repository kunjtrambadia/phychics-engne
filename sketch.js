const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

var myEngine;

var myWorld;

var box,ball,ground;

function setup() {
  createCanvas(800,400);
  
myEngine = Engine.create()
myWorld = myEngine.world;
box = Bodies.rectangle(200,250,30,50);
World.add(myWorld,box)
var ground_options = {
  isStatic:true
}
ground = Bodies.rectangle(400,400,800,10,ground_options)
World.add(myWorld,ground)
var ball_option = {
  restitution:0.4
}
ball = Bodies.circle(300,250,50,ball_option)
World.add(myWorld,ball)
}

function draw() {
  background(255,255,200);  
Engine.update(myEngine)
rectMode(CENTER)
 rect(box.position.x,box.position.y,30,50);

rect(ground.position.x,ground.position.y,800,10);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,50,50)

  drawSprites();
}