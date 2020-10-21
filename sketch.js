var fixedRect, movingRect;
var rect1, rect2;

var topRect, bottomRect

function setup() {
  createCanvas(1200,1200);

  topRect = createSprite(700,300,80,50);
  topRect.shapeColor = "black";

  bottomRect = createSprite(700,500,50,80);
  bottomRect.shapeColor = "black";
 fixedRect= createSprite(400, 300, 80, 50);
 fixedRect.shapeColor="red";
 movingRect= createSprite(500,300,50,80); 
 movingRect.shapeColor="red";
 rect1 = createSprite(600,300,80,50);
 rect1.shapeColor = "red";
 rect2 = createSprite(300,300,80,50);
 rect2.shapeColor = "red";

  topRect.velocityY = 5;
  bottomRect.velocityY = -5;
}

function draw() {
  background(255,255,255);  

  bounceOff(topRect,bottomRect);
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  //var value = isTouching();

  if(isTouching(fixedRect,movingRect)){
      fixedRect.shapeColor ="black";
  }
  else{
     fixedRect.shapeColor = "red";
  }

  if(isTouching(rect1, movingRect)){
    rect1.shapeColor = "black";
  }
  else{
    rect1.shapeColor = "red";
  }

  if(isTouching(rect2,movingRect)){
    rect2.shapeColor = "black";
  }
  else{
    rect2.shapeColor = "red";
   }

  drawSprites();


}

