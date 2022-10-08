class Platform 
{
  constructor(x, y, hitboxWidth, hitboxHeight, drawWidth, drawHeight, solid, visible, type_id, mode_id, idleMovement)
  {
    this.x = x;
    this.y = y;
    this.oldY = y;
    this.hitboxWidth = hitboxWidth;
    this.hitboxHeight = hitboxHeight;
    this.drawWidth = drawWidth;
    this.drawHeight = drawHeight;
    this.solid = solid;
    this.visible = visible;
    this.type_id = type_id;
    this.mode_id = mode_id;
    this.checkpoint_id = 0;
    this.idleMovement = idleMovement;
    this.glitchDice = Math.floor(Math.random() * 100 +1);
    this.curFrame = 0;
    this.delayFrame = 20;
    this.maxDelayFrame = 20; 
    this.grabbed = false;
  }
}

class SceneSprite
{
  constructor(x, y, drawWidth, drawHeight, type_id, idleMovement)
  {
    this.x = x;
    this.y = y;
    this.drawWidth = drawWidth;
    this.drawHeight = drawHeight;
    this.type_id = type_id;
    this.idleMovement = idleMovement;
    this.curFrame = 0;
    this.delayFrame = 20;
    this.maxDelayFrame = 20; 
  }
}

class Button
{
  constructor(x,y,w,h,sceneTeleport,isLevel,isCoilButton,buttonText,isClicked)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sceneTeleport = sceneTeleport;
    this.isLevel = isLevel;
    this.isCoilButton = isCoilButton;
    this.buttonText = buttonText;
    this.isClicked = isClicked;
  }
}