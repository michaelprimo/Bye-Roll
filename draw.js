base_image = new Image();
base_image.src = 'sprite.png';

background_image = new Image();
background_image.src = 'background.png';

logo_image = new Image();
logo_image.src = 'logo.png';

logo2_image = new Image();
logo2_image.src = 'logo2.png';

logo3_image = new Image();
logo3_image.src = 'logo3.png';

let skull_sprite = new SceneSprite(30, 16, 32, 32, 18, [57,58,59,58]);
let star_sprite =  new SceneSprite(330, 16, 32, 32, 15, [48,49,50,49]);
let star_sprite2 =  new SceneSprite(370, 16, 32, 32, 15, [48,49,50,49]);
let star_sprite3 =  new SceneSprite(410, 16, 32, 32, 15, [48,49,50,49]);
let player_sprite =  new SceneSprite(1000, 240, 32, 32, 15, [0,1,2,3]);

let HUDSprites = [star_sprite, star_sprite2, star_sprite3, skull_sprite, player_sprite];

let button1 = new Button(380,242,40,40,0,true,false,"New Game",true);
let button2 = new Button(380,295,40,40,0,true,false,"New Game",true);
let button3 = new Button(380,347,40,40,0,true,false,"New Game",true);
let button4 = new Button(380,397,40,40,0,true,false,"New Game",true);
let button5 = new Button(380,440,40,40,0,true,false,"New Game",true);
let button6 = new Button(380,483,40,40,0,true,false,"New Game",true);
let button7 = new Button(380,530,40,40,0,true,false,"New Game",false);
let buttonList = [button1, button2, button3, button4, button5, button6, button7];

function drawButton(id)
{
    if(buttonList[id].isClicked == true)
    {
      ctx.fillStyle = "green";
      ctx.lineWidth = "4px";
      ctx.beginPath();
      ctx.fillRect(buttonList[id].x,buttonList[id].y,buttonList[id].w,buttonList[id].h);
      ctx.stroke();
    }
    else
    {
     ctx.strokeStyle = "green";
     ctx.lineWidth = "4px";
     ctx.beginPath();
     ctx.strokeRect(buttonList[id].x,buttonList[id].y,buttonList[id].w,buttonList[id].h);
     ctx.stroke();
    }
}

// DRAW LEVEL
function drawLevel()
{
  
  ctx.clearRect(0,0, width, height);
  
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = 0.1;
  ctx.drawImage(background_image,16,96);
  ctx.globalAlpha = 1.0;
 
  

  for(let i = 0; i<levelMap.length; i++)
  {
    
    if(levelMap[i].type_id >= 1)
    {
      if(levelMap[i].visible == true)
      {
      ctx.drawImage(base_image, (levelMap[i].idleMovement[levelMap[i].curFrame]*SPRITE_SIZE), 0, 16, 16,(levelMap[i].x)-((TILE_SIZE-levelMap[i].hitboxWidth)/2), (levelMap[i].y)-((TILE_SIZE-levelMap[i].hitboxHeight)/2), levelMap[i].drawWidth, levelMap[i].drawHeight);      
      }
    }
    
    if(levelMap[i].delayFrame >= levelMap[i].maxDelayFrame)
    {
      if(levelMap[i].curFrame > levelMap[i].idleMovement.length-2)
      {
        levelMap[i].curFrame = 0;
      }
      else
      {
        levelMap[i].curFrame++;
      }
      levelMap[i].delayFrame = 0;
    }
    else
    {
      levelMap[i].delayFrame++;
    }
  }

  for(let i = 0; i < HUDSprites.length; i++)
  {
    ctx.drawImage(base_image, (HUDSprites[i].idleMovement[HUDSprites[i].curFrame]*SPRITE_SIZE), 0, 16, 16, HUDSprites[i].x, HUDSprites[i].y, HUDSprites[i].drawWidth, HUDSprites[i].drawHeight);
    if(HUDSprites[i].delayFrame >= HUDSprites[i].maxDelayFrame)
    {
      if(HUDSprites[i].curFrame > HUDSprites[i].idleMovement.length-2)
      {
        HUDSprites[i].curFrame = 0;
      }
      else
      {
        HUDSprites[i].curFrame++;
      }
      HUDSprites[i].delayFrame = 0;
    }
    else
    {
      HUDSprites[i].delayFrame++;
    }
  }

  ctx.drawImage(base_image, (playerCharacter.idleMovement[playerCharacter.curFrame]*SPRITE_SIZE)-1, 0, 16, 16, playerCharacter.x-((TILE_SIZE-playerCharacter.hitboxWidth)/2), playerCharacter.y-((TILE_SIZE-playerCharacter.hitboxHeight)/2), playerCharacter.drawWidth, playerCharacter.drawHeight);

  if(playerCharacter.delayFrame >= playerCharacter.maxDelayFrame)
  {
    if(playerCharacter.curFrame > playerCharacter.idleMovement.length-2)
    {
      playerCharacter.curFrame = 0;
    }
    else
    {
      playerCharacter.curFrame++;
    }
    playerCharacter.delayFrame = 0;
  }
  else
  {
    playerCharacter.delayFrame++;
  }
  
  
  ctx.fillStyle='#F0F0EB';
  ctx.font = "30px Tahoma";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText("x " + playerCharacter.deathCounter, 100,36);
  
  ctx.fillStyle='#F0F0EB';
  ctx.font = "19px Tahoma";
  if(scene_manager.curLevel == 5)
  {
    ctx.fillText("Congratulations! You died only " + playerCharacter.deathCounter + " times.", 240,120);
    ctx.fillText("The minimum possible was 6!", 240,160);
    if(playerCharacter.deathCounter <= 6)
    {
      ctx.fillText("And you did it!!!", 240,200);
    }
    else
    {
      ctx.fillText("Try again if you want a harder challenge!", 240,200);
    }
    ctx.fillText("Refresh the game for starting again.", 240,240);
  }
  
  ctx.lineJoin = "round";
  ctx.beginPath();
    ctx.lineWidth = "1";
          
    // Set the path color
    ctx.strokeStyle = "#7BE098";
      
    ctx.moveTo(90, 550);
    ctx.lineTo(10, 590);
    ctx.lineTo(90, 630);
    ctx.lineTo(90, 550);
    ctx.moveTo(390, 550);
    ctx.lineTo(470, 590);
    ctx.lineTo(390, 630);
    ctx.lineTo(390, 550);
    ctx.stroke();
  if(scene_manager.curLevel == 0 && scene_manager.isLevel == true)
  {
    ctx.fillText("Click/hold the arrows for moving.", width/2, 575);
    ctx.fillText("Get all the stars to progress.", width/2, 605);  
  }

  if(scene_manager.curLevel == 1 && scene_manager.isLevel == true)
  {
    ctx.fillText("If you die, you will be able to fly.", width/2, 575);
    ctx.fillText("If you die again, you will bounce.", width/2, 605);
  }

  if(scene_manager.curLevel == 2 && scene_manager.isLevel == true)
  {
    ctx.fillText("The blue blocks only appears when", width/2, 575);
    ctx.fillText("you fly. Stars are also checkpoints.", width/2, 605);
  }

  if(scene_manager.curLevel == 3 && scene_manager.isLevel == true)
  {
    ctx.fillText("The green blocks only appears when", width/2, 575);
    ctx.fillText("you bounce. Use them well.", width/2, 605);
  }

  if(scene_manager.curLevel == 4 && scene_manager.isLevel == true)
  {
    ctx.fillText("Last level of the game!", width/2, 575);
    ctx.fillText("Show them what you got!", width/2, 605);
  }
  
  
}
