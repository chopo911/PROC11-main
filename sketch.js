var sea, seaImg;
var ship,shipImg;
function preload(){
  seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);

  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -2;

  ship = createSprite(120,350,20,20);
  ship.addAnimation("seaImg1",shipImg);
  ship.scale = 0.1;



 


  
}

function draw() {
  background("blue");

  if (sea.x <0){
    sea.x=sea.width/3;
  }

 drawSprites();
}