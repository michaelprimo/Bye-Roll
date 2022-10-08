


class mobileControls
{
  constructor()
  {
    this.mouseIsDown = false;
    this.buttonPressed = "";
    this.ifButtonPressed = false;
  }
}

class Player 
{
  constructor(x, y, hitboxWidth, hitboxHeight, drawWidth, drawHeight, grounded, speedX, speedY, maxSpeed, gravity, acceleration, friction, jumpPower, keys, collided, collision_type_id, idleMovement, curFrame, delayFrame, maxDelayFrame)
  {
    this.x = x;
    this.y = y;
    this.hitboxWidth = hitboxWidth;
    this.hitboxHeight = hitboxHeight;
    this.drawWidth = drawWidth;
    this.drawHeight = drawHeight;
    this.grounded = grounded;
    this.speedX = speedX;
    this.speedY = speedY;
    this.maxSpeed = maxSpeed;
    this.gravity = gravity;
    this.acceleration = acceleration;
    this.oldAcceleration = acceleration;
    this.friction = friction;
    this.jumpPower = jumpPower;
    this.keys = keys;
    this.collided = collided;
    this.collision_type_id = collision_type_id;
    this.collision_type_id = 0;
    this.idleMovement = idleMovement;
    this.curFrame = curFrame;
    this.delayFrame = delayFrame;
    this.maxDelayFrame = maxDelayFrame;
    this.isBouncing = true;
    this.oldGravity = gravity;
    this.cameraY = y;
    this.spawnX = 150;
    this.spawnY = 350;
    this.checkpoint_last_id = [false,false,false];
    this.checkpoint_grabbed = 0;
    this.movementFrameCount = 0;
    this.direction = 90;
    this.deathCounter = 0;
    this.death = function()
    {
      playerCharacter.deathCounter++;
      playerCharacter.speedX = 0;
      playerCharacter.speedY = 0;
      playerCharacter.direction = 360;
      on_a_roll(); 
      scene_manager.waitFrames = 0;
      scene_manager.stop_waitFrames = false;
      if(die_roll == 2)
      {
        playerCharacter.x = width - playerCharacter.spawnX;
      }
      else
      {
        playerCharacter.x = playerCharacter.spawnX;
        
      }
      playerCharacter.y = playerCharacter.spawnY;
      playerCharacter.collision_type_id = 0;
      playerCharacter.isBouncing = !playerCharacter.isBouncing;
      if(playerCharacter.isBouncing === true)
      {
        playerCharacter.gravity = playerCharacter.oldGravity;
        playerCharacter.acceleration = playerCharacter.oldAcceleration;
        playerCharacter.idleMovement = [0,1,2,1];
      }
      else
      {
        playerCharacter.gravity = playerCharacter.oldGravity*3.5;
        playerCharacter.acceleration = playerCharacter.oldAcceleration/2;
        playerCharacter.idleMovement = [3,4,5,4];
      }
      
      die_mode_level();
      playerCharacter.enemies_movement();
      scene_manager.curScene = 1;
      scene_manager.isLevel = false;
      
      

    }
    this.isGrounded = function()
    {
      
      // Player is on air and they aren't touching anything.
      if(playerCharacter.grounded != true)
      {
        
        //if player is in "gliding" mode...
        if(playerCharacter.isBouncing === false)
        {
          //...move 
          playerCharacter.speedY = playerCharacter.gravity;
        }
        //nothing particular happen if you are in bouncing mode.
      }
      //if you are touching a platform, however...
      else
      {

      
      
       //...this happens in "bouncing mode".
       if(playerCharacter.isBouncing === true)
       {
        //set the speed as the jump speed.
        playerCharacter.speedY = -playerCharacter.jumpPower;
       
       }
       //this happens in gliding mode.
       else
       {
        //invert gravity.
        playerCharacter.gravity = -playerCharacter.gravity;
        playerCharacter.speedY = playerCharacter.gravity;
   
         
       }
       
      }

      

    }
    this.check_playerGravity = function()
    {
      
        if(playerCharacter.speedY >= playerCharacter.gravity)
        {
          playerCharacter.speedY = playerCharacter.gravity;
         
        }
  
        playerCharacter.speedX *= playerCharacter.friction;
        if(playerCharacter.isBouncing === true)
        {
          playerCharacter.speedY += playerCharacter.gravity;
         
        }
        playerCharacter.x += playerCharacter.speedX;
        playerCharacter.y += playerCharacter.speedY;
      
      
      
    }
          
    this.enemies_movement = function()
    {
      levelMap.forEach((number, index, array) => 
      {
        if((levelMap[index].type_id == 9) || (levelMap[index].type_id == 11))
        {
          levelMap[index].solid = false;
        }
        if((levelMap[index].type_id == 9 && playerCharacter.isBouncing == true))
        {
          levelMap[index].type_id = 10;
          levelMap[index].idleMovement = [(levelMap[index].type_id,levelMap[index].type_id*3)+3,(levelMap[index].type_id,levelMap[index].type_id*3)+4,(levelMap[index].type_id,levelMap[index].type_id*3)+5,(levelMap[index].type_id,levelMap[index].type_id*3)+4];
          levelMap[index].solid = true;
        }
        if((levelMap[index].type_id == 11 && playerCharacter.isBouncing == false))
        {
          levelMap[index].type_id = 12;
          levelMap[index].idleMovement = [(levelMap[index].type_id,levelMap[index].type_id*3)+3,(levelMap[index].type_id,levelMap[index].type_id*3)+4,(levelMap[index].type_id,levelMap[index].type_id*3)+5,(levelMap[index].type_id,levelMap[index].type_id*3)+4];
          levelMap[index].solid = true;
        }
        if((levelMap[index].type_id == 10 && playerCharacter.isBouncing == false))
        {
          levelMap[index].type_id = 9;
          levelMap[index].idleMovement = [(levelMap[index].type_id,levelMap[index].type_id*3)+3,(levelMap[index].type_id,levelMap[index].type_id*3)+4,(levelMap[index].type_id,levelMap[index].type_id*3)+5,(levelMap[index].type_id,levelMap[index].type_id*3)+4];
          levelMap[index].solid = true;
        }
        if((levelMap[index].type_id == 12 && playerCharacter.isBouncing == true))
        {
          levelMap[index].type_id = 11;
          levelMap[index].idleMovement = [(levelMap[index].type_id,levelMap[index].type_id*3)+3,(levelMap[index].type_id,levelMap[index].type_id*3)+4,(levelMap[index].type_id,levelMap[index].type_id*3)+5,(levelMap[index].type_id,levelMap[index].type_id*3)+4];
          levelMap[index].solid = true;
        }
        
        

        if(levelMap[index].type_id == 17 && scene_manager.nextLevel == true)
        {
          levelMap[index].type_id = 16;
          levelMap[index].solid = false;
          let frame_id = (levelMap[index].type_id*3)+3;
          levelMap[index].idleMovement = [frame_id,frame_id+1,frame_id+2,frame_id+1];
          
        }
    
      });
    }
    
  }
}


let playerCharacter = new Player(250,250,24,24,TILE_SIZE,TILE_SIZE,false,0,0,3,1,1,0.8,13,[],false,0,[0,1,2,1,0],0,0,3,0,180);
let mobileControl = new mobileControls();

// CREATE CHARACTER
function moveCharacter() 
{ 
  
  if (playerCharacter.keys[39] || (mobileControl.buttonPressed == "left" && mobileControl.mouseIsDown == true)) 
  {
      // right arrow
      
        if (playerCharacter.speedX < playerCharacter.maxSpeed) 
        {
          playerCharacter.speedX += playerCharacter.acceleration;
        }
      
     
  }
  if (playerCharacter.keys[37] || (mobileControl.buttonPressed == "right" && mobileControl.mouseIsDown == true)) 
  {
      // left arrow
      
      if (playerCharacter.speedX > -playerCharacter.maxSpeed) 
      {
        playerCharacter.speedX -= playerCharacter.acceleration;
      }
      
  } 
}


// COLLISION
function check_playerCollision()
{
  playerCharacter.grounded = false;

  for(let i = 0; i<levelMap.length; i++)
  {  
    
    levelMap[i].y = camera.y + levelMap[i].oldY;
    let dir = colCheck(playerCharacter, levelMap[i]);

    if(dir != undefined)
    {
      playerCharacter.collision_type_id = levelMap[i].type_id;
      playerCharacter.collision_id = i;
    }

    if(playerCharacter.collision_type_id === 8 && levelMap[i].visible === true && levelMap[i].type_id === 8)
    {
      playerCharacter.death();
    }
   

    if((levelMap[i].type_id == 1+scene_manager.curLevel && die_roll == 6 && playerCharacter.collision_type_id == 1+scene_manager.curLevel && playerCharacter.collision_id == i && playerCharacter.grounded == true))
    {
      let frame_id = (Math.floor(Math.random() * 18 + 1)*3)+3;
      levelMap[i].idleMovement = [frame_id,frame_id+1,frame_id+2,frame_id+1];

    }

    for(j = 0; j < 3; j++)
    {
      if((playerCharacter.collision_type_id === 13+j && levelMap[i].type_id === 13+j && playerCharacter.checkpoint_last_id[j] == false))
      {
        if(die_roll == 2)
        {
          playerCharacter.spawnX = width-levelMap[i].x;
        }
        else
        {
          playerCharacter.spawnX = levelMap[i].x;
        }
        playerCharacter.spawnY = levelMap[i].y;
        levelMap[i].solid = false;
        
        //playerCharacter.collision_type_id = 0;
        playerCharacter.checkpoint_last_id[j] = true;
        levelMap[i].grabbed = true;
        
        let frame_id = (levelMap[i].type_id*3)+3*(16-levelMap[i].type_id);
        levelMap[i].idleMovement = [frame_id,frame_id+1,frame_id+2,frame_id+1];
        HUDSprites[j].idleMovement=[42,43,44,43];
        levelMap[i].visible = false;
        if(playerCharacter.checkpoint_last_id[0] == true && playerCharacter.checkpoint_last_id[1] == true && playerCharacter.checkpoint_last_id[2] == true && playerCharacter.checkpoint_last_id[2] == true)
        {
          scene_manager.nextLevel = true;
          playerCharacter.enemies_movement();
        }
        
      }
    }
    
    if(playerCharacter.collision_type_id === 16 && scene_manager.nextLevel == true)
    {
     scene_manager.curScene = 1;
     scene_manager.curLevel++;
     for(let j = 0; j<playerCharacter.checkpoint_last_id.length;j++)
     {
      playerCharacter.checkpoint_last_id[j] = false;
     }
     playerCharacter.spawnX = levelManager[scene_manager.curLevel].player_spawnX;
     playerCharacter.spawnY = levelManager[scene_manager.curLevel].player_spawnY;
     scene_manager.nextLevel = false;
     scene_manager.isLevel = false;
     levelStart();
    }

    if (dir === "l" || dir === "r") 
    {
      if(levelMap[i].solid == true)
      {
        playerCharacter.speedX = -playerCharacter.speedX;
      }
     
    } 
    else if (dir === "b") 
    {
      if(levelMap[i].solid == true)
      {
        
        playerCharacter.grounded = true;
        
        
      }
      
     
    } 
    else if (dir === "t") 
    {
      if(levelMap[i].solid == true)
      {
        
        if(playerCharacter.isBouncing === true)
        {
          playerCharacter.speedY = 0;
        }
        else
        {
          playerCharacter.grounded = true;
        }
        
      }
      
    }
  }
  }
  
document.body.addEventListener("keydown", function(e) {
  playerCharacter.keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
  playerCharacter.keys[e.keyCode] = false;
})

canvas.onmousedown = function(e)
{
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  mobileControl.mouseIsDown = true;
  
  
    if(x > width/2)
    {
      mobileControl.buttonPressed = "left";
      if(scene_manager.curScene == 0  && scene_manager.isLevel == false)
      {
        if(document.monetization && document.monetization.state === 'started')
        {
          scene_manager.curScene = 2;
        }
        else
        {
          alert("It seems you don't have a Coil subscription activated. If you do, you will be able to change game modes in the game! You can trick the Bye Roll when dying and choosing the rules you want!");
        }
      }
      if(scene_manager.curScene == 1 && scene_manager.isLevel == false && scene_manager.stop_waitFrames == true)
      {
        scene_manager.isLevel = true;
        scene_manager.stop_waitFrames = false;
      }
    }
    else
    {
      mobileControl.buttonPressed = "right";
      if(scene_manager.curScene == 0 && scene_manager.isLevel == false)
      {
        scene_manager.isLevel = true;
        scene_manager.stop_waitFrames = false;
      }
      if(scene_manager.curScene == 1 && scene_manager.isLevel == false && scene_manager.stop_waitFrames == true)
      {
        scene_manager.isLevel = true;
        scene_manager.stop_waitFrames = false;
      }
      
    }
    if(scene_manager.curScene == 2 && scene_manager.isLevel == false)
    {
      for(let i = 0; i<buttonList.length;i++)
      {
        mobileControl.ifButtonPressed = isPointInsideRect(x,y,buttonList[i].x,buttonList[i].y,buttonList[i].w,buttonList[i].h);
        if(mobileControl.ifButtonPressed == true)
        {
          buttonList[i].isClicked = !buttonList[i].isClicked;
          if(i!=6)
          {
            die_roll_available[i] = !die_roll_available[i];
          }
          
        }
        if(buttonList[6].isClicked == true)
        {
          scene_manager.isLevel = true;
        }
      }
      
    }
}
canvas.onmouseup = function(e)
{
    if(mobileControl.mouseIsDown)
    {
      mobileControl.mouseIsDown = false;
      mobileControl.buttonPressed = "";
      //mouseClick(e);
      
    } 
}

let clientX;
let clientY;

document.addEventListener('touchstart', (e) => 
{
  // Cache the client X/Y coordinates
  clientX = e.touches[0].clientX;
  clientY = e.touches[0].clientY;
  mobileControl.mouseIsDown = true;
  if(clientX > width/2)
  {
    mobileControl.buttonPressed = "left";
    if(scene_manager.curScene == 0  && scene_manager.isLevel == false)
    {
      if(document.monetization && document.monetization.state === 'started')
      {
        scene_manager.curScene = 2;
      }
      else
      {
        alert("It seems you don't have a Coil subscription activated. If you do, you will be able to change game modes in the game! You can trick the Bye Roll when dying and choosing the rules you want!");
      }
    }
    if(scene_manager.curScene == 1 && scene_manager.isLevel == false && scene_manager.stop_waitFrames == true)
      {
        scene_manager.isLevel = true;
        scene_manager.stop_waitFrames = false;
      }
  }
  else
  {
    mobileControl.buttonPressed = "right";
    if((scene_manager.curScene == 0 || scene_manager.curScene == 1) && scene_manager.isLevel == false && scene_manager.stop_waitFrames == true)
    {
      scene_manager.isLevel = true;
      scene_manager.stop_waitFrames = false;
    }
    
  }
  if(scene_manager.curScene == 2 && scene_manager.isLevel == false)
  {
    for(let i = 0; i<buttonList.length;i++)
    {
      mobileControl.ifButtonPressed = isPointInsideRect(x,y,buttonList[i].x,buttonList[i].y,buttonList[i].w,buttonList[i].h);
      if(mobileControl.ifButtonPressed == true)
      {
        buttonList[i].isClicked = !buttonList[i].isClicked;
        if(i!=6)
        {
          die_roll_available[i] = !die_roll_available[i];
        }
        
      }
      if(buttonList[6].isClicked == true)
      {
        scene_manager.isLevel = true;
      }
    }
    if(scene_manager.curScene == 0 && scene_manager.isLevel == false)
    {
      scene_manager.isLevel = true;
      scene_manager.stop_waitFrames = false;
    }
    if(scene_manager.curScene == 1 && scene_manager.isLevel == false && scene_manager.stop_waitFrames == true)
    {
      scene_manager.isLevel = true;
      scene_manager.stop_waitFrames = false;
    }
  }
}, false);

document.addEventListener('touchend', (e) => 
{
  let deltaX;
  let deltaY;
  
  // Compute the change in X and Y coordinates.
  // The first touch point in the changedTouches
  // list is the touch point that was just removed from the surface.
  deltaX = e.changedTouches[0].clientX - clientX;
  deltaY = e.changedTouches[0].clientY - clientY;
  if(mobileControl.mouseIsDown)
  {
    mobileControl.mouseIsDown = false;
    mobileControl.buttonPressed = "";
    //mouseClick(e);
    
  } 
  
  // Process the data…
}, false);


function isPointInsideRect(pointX,pointY,rectX,rectY,rectWidth,rectHeight)
{
  let sizeX = 480;
  let sizeY = 640;
  let ratioX = window.innerWidth/sizeX;
  let ratioY = window.innerHeight/sizeY;
  let ratio = Math.min(ratioX, ratioY);
  rectX*=ratio;
  rectY*=ratio;
  console.log("mx:" + pointX + " my: " + pointY + " rX: " + rectX + "rY: " + rectY + " rW: " + rectWidth + " rH: " + rectHeight + "");
 
  return  (rectX <= pointX) && (rectX + rectWidth >= pointX) &&
               (rectY <= pointY) && (rectY + rectHeight >= pointY);
}