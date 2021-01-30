var bullet, speed, weight;
var wall, thickness;

var bulletRightEdge;
var wallLeftEdge;

var damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);

  thickness = random(22, 83);

  

  bullet = createSprite(100, 200, 40, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  
}

function draw() {
  background(0);
  
  if(hasCollided(bullet, wall)) 
  {
    bullet.velocityX = 0;
    
    damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10) 
    {
      wall.shapeColor = color(255, 0, 0);
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0, 255, 0)
    }
  }

  textSize(30);
  fill("white");
  text("Damage: " + damage, 50, 50);



  drawSprites();
}

function hasCollided(Lbullet, Lwall) 
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true
  }
  return false;
}