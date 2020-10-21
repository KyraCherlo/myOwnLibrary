function isTouching(object1, object2){// isTouching(rect1, movingRect)

    if (object1.x-object2.x<object1.width/2 + object2.width/2 &&
      object2.x-object1.x<object1.width/2 + object2.width/2 && 
      object1.y-object2.y<object1.height/2 + object2.height/2 &&
      object2.y-object1.y<object1.height/2 + object2.height/2){
        return true;
  
      }
      else{
        return false;
      }
  }
  function bounceOff(object1,object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
      object2.x - object1.x < object1.width/2 + object2.width/2){
  
        // topRect => right => 5 => opp - left = > -5
        //topRect => left => -55 => opp - right = > 5
  
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
  
    }
  
    if(object1.y - object2.y < object1.height/2 + object2.height/2 &&
      object2.y - object1.y < object1.height/2 + object2.height/2){
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    }
  
  }