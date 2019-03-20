
let coff = 0.0;
var canvas;
//var h = windowHeight;
function setup() {
canvas = createCanvas( windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1'); 
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight );
}

function draw()
{
background(0);
create_grid();

//noLoop();
  
}


function create_grid()
{
  let col = map(noise(coff),0,1,0,255);
 
  var space_cr = 50;
  for(var gx=10;gx<windowWidth;gx+=space_cr)
  {
    for(var gy=10;gy<windowHeight ;gy+=space_cr)
    {
      stroke(random(10,30));
      line(gx,gy,gx+space_cr,gy+space_cr);
            line(gx,gy+space_cr,gx+space_cr,gy);
      
      line(gx,gy,gx+space_cr,gy);
      
      line(gx,gy,gx,gy+space_cr);
    fill(random(0,70));
      noStroke();
      ellipse(gx,gy,8,8);
      
      
    }
  }
coff+=1;
}