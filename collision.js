
// CHECK COLLISION SIDE
function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.hitboxWidth / 2)) - (shapeB.x + (shapeB.hitboxWidth / 2)),
        vY = (shapeA.y + (shapeA.hitboxHeight / 2)) - (shapeB.y + (shapeB.hitboxHeight / 2)), // add the half widths and half heights of the objects 
        hWidths = (shapeA.hitboxWidth / 2) + (shapeB.hitboxWidth / 2),
        hHeights = (shapeA.hitboxHeight / 2) + (shapeB.hitboxHeight / 2), 
        colDir = null;
  
        // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision 
  if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) { // figures out on which side we are colliding (top, bottom, left, or right) 
    var oX = hWidths - Math.abs(vX), 
        oY = hHeights - Math.abs(vY); 
    if (oX >= oY) 
    { 
      if (vY > 0) 
      { 
        colDir = "t";
        if(shapeB.solid == true)
        {
          shapeA.y += oY;
        }
         
        
      } 
      else 
      {
        colDir = "b";
        if(shapeB.solid == true)
        {
          shapeA.y -= oY;
          playerCharacter.grounded = true;
        }
        
      } 
    } 
    else {
      if (vX > 0) 
      {
        colDir = "l";
        if(shapeB.solid == true)
        {
          shapeA.x += oX;
        }
       
      } 
      else 
      {
        colDir = "r";
        if(shapeB.solid == true)
        {
          shapeA.x -= oX; 
        }
        
      }
    } 
  } return colDir; 
  }