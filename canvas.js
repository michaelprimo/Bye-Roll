const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width;
let height = canvas.height;

resizeCanvas();

function resizeCanvas()
{
  window.devicePixelRatio=2;
  let sizeX = 480;
  let sizeY = 640;
  let ratioX = window.innerWidth/sizeX;
  let ratioY = window.innerHeight/sizeY;
  let ratio = Math.min(ratioX, ratioY);

  if(window.innerWidth < sizeX)
  {
    canvas.style.width = window.innerWidth + "px";
  }
  else
  {
    canvas.style.width = sizeX*ratio + "px";
  }

  if(window.innerHeight < sizeY)
  {
    canvas.style.height = window.innerHeight + "px";
  }
  else
  {
    canvas.style.height = sizeY*ratio + "px";
  }
  
  let scale = window.devicePixelRatio; 
  
  canvas.width = Math.floor(sizeX * scale);
  canvas.height = Math.floor(sizeY * scale);
  
  ctx.scale(scale, scale);
  
}