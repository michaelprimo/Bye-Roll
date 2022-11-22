let musicFrame = 0;

// UPLOAD LOOP
function upload()
{
  if(scene_manager.isLevel == true)
  {
    if(scene_manager.waitFrames <= 60)
    {
      scene_manager.waitFrames++;
    }
    else
    {
      scene_manager.stop_waitFrames = true;
      
    }
    check_playerCollision();
   
    
    drawLevel();
    if(scene_manager.stop_waitFrames == true)
    {
      moveCharacter();
      playerCharacter.isGrounded();
      playerCharacter.check_playerGravity();
    }
   
    
    
  }
  else
  {
    
    if(scene_manager.curScene == 0)
    {
      ctx.clearRect(0,0, width, height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "yellow";
      ctx.globalAlpha = 0.5;
      ctx.drawImage(background_image,16,110);
      ctx.globalAlpha = 1.0;
      ctx.drawImage(logo_image, 140, 10);
      ctx.drawImage(logo2_image, 30, 230);
      ctx.drawImage(logo3_image, 350, 230);
     
      ctx.font = "19px Tahoma";
      ctx.fillText("Made by: Michael Primo for the JS13K competition.", 30,590);
      ctx.fillText("Tested and support by: Paraserver and RPG2S", 50,620);
    }
    if(scene_manager.curScene == 1)
    {
      scene_manager.waitFrames++;
      ctx.clearRect(0,0, width, height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "yellow";
      ctx.font = "25px Tahoma";
      ctx.fillText("Awaken, fellow one.", width/2, 110);
      ctx.fillText("You Bye rolled a " + die_roll + ".", width/2, 170);
      ctx.fillText("You are reborn in a " + die_roll_message[0] + " world.", width/2, 230);
      ctx.fillText(die_roll_message[1], width/2, 290);
      ctx.fillText(die_roll_message[2], width/2, 350);
      if(scene_manager.waitFrames < 30)
      {
        scene_manager.stop_waitFrames = false;
      }
      else
      {
        scene_manager.stop_waitFrames = true;
      }
      
    }
    if(scene_manager.curScene == 2)
    {
      ctx.clearRect(0,0, width, height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "yellow";
      ctx.globalAlpha = 0.5;
      //ctx.drawImage(background_image,16,110);
      ctx.globalAlpha = 1.0;
      ctx.drawImage(logo_image, 140, 10);
     
      drawButton(0);
      drawButton(1);
      drawButton(2);
      drawButton(3);
      drawButton(4);
      drawButton(5);
      drawButton(6);
      ctx.font = "30px Tahoma";
      ctx.fillStyle = "yellow";
      ctx.fillText("COIL MODE", 170,150);
      ctx.font = "19px Tahoma";
      ctx.fillText("You can trick the dice at your will!", 80,200);
      ctx.fillText("Select the modes that will be present in the game.", 30,230);
      ctx.font = "30px Tahoma";
      ctx.fillText("1) Normal Mode", 30,270);
      ctx.fillText("2) Mirror Mode", 30,320);
      ctx.fillText("3) Scrambled Mode", 30,370);
      ctx.fillText("4) Easy Mode", 30,420);
      ctx.fillText("5) Deceptive Mode", 30,470);
      ctx.fillText("6) Creative Mode", 30,520);
      ctx.fillText("Ready to play!", 30,560);
      ctx.font = "19px Tahoma";
      ctx.fillText("Made by: Michael Primo", 140,600);
      ctx.fillText("Tested and support by: Paraserver and RPG2S", 50,630);
     
      
    }
    
  }

  window.requestAnimationFrame(upload);
}

function levelStart()
{
  set_rolls();
  levelMap.length = 0;
  createMap();
 
  playerCharacter.x =  levelManager[scene_manager.curLevel].player_spawnX;
  playerCharacter.y =  levelManager[scene_manager.curLevel].player_spawnY;
  
  playerCharacter.enemies_movement();
}



window.requestAnimationFrame(upload);
levelStart();

  


