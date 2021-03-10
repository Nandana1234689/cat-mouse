
var m,mi,mi1,mi2
var c,ci,ci1,ci2
var g,gi 

function preload( ){
mi   =loadImage("images/mouse1.png")
mi1  =loadAnimation("images/mouse2.png","images/mouse3.png")
mi2  =loadImage("images/mouse4.png")
ci   = loadImage("images/cat1.png")
ci1  =loadAnimation("images/cat2.png","images/cat3.png")
ci2  = loadImage("images/cat4.png")
gi   = loadImage("images/garden.png")
}

function setup(){
createCanvas(800,800)

g=createSprite(400,400,30,30)
g.addImage(gi)

m=createSprite(170,610,30,30)
m.addImage(mi)
m.addAnimation("standing",mi2)
m.addAnimation("running",mi1)
m.scale=0.13

c=createSprite(690,610,50,50)
c.addImage(ci)
c.addAnimation("standing",ci2)
c.addAnimation("running",ci1)
c.scale=0.15

c.debug=false
c.setCollider("rectangle",0,0,30,990)

}


function draw(){
background("white")

if(m.isTouching(c)){
 c.changeImage("standing",ci2)
 m.changeImage("standing",mi2)
 c.velocityX=0
 }

 

if (keyDown("LEFT_ARROW")){
  c.changeAnimation("running",ci1)
  c.scale=0.2
  m.changeAnimation("running",mi1)
 c.velocityX=-2
}
if (keyDown("UP_ARROW")){
  c.changeAnimation("running",ci1)
  c.scale=0.2
  m.changeAnimation("running",mi1)
  c.velocityX=-2
}
if (keyDown("DOWN_ARROW")){
  c.changeAnimation("running",ci1)
  c.scale=0.2
  m.changeAnimation("running",mi1)
 c.velocityX=-2
}


m.depth=m.depth
m.depth=m.depth+1


drawSprites();
}



