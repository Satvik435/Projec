var sea,seaImg,ship,shipImg1

function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(800,500);
    sea = createSprite(200,200,400,400) 
    sea.addImage(seaImg)
    sea.scale = 0.4
    ship= createSprite(134,234)
    ship.addAnimation('ship',shipImg1)
    ship.scale = 0.4
    sea.velocityX = -5  
}

function draw() {
  background("blue");
  console.log (sea.width)
  if (sea.x<0) {
    sea.x=sea.width/5
  }
 drawSprites()
}