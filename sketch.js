var thickness,wall;
var speed,weight,bullet;

function setup() {
  var canvas=createCanvas(1600,400);
  bullet = createSprite(100, 200, 50, 50);
  bullet.shapeColor = "white";
  wall = createSprite(1200, 200, thickness, 300);
  wall.shapeColor = "blue"
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(5,5,5); 
   bullet.velocityX = speed;
   //hasCollided();
   if(hasCollided(bullet,wall)){
     bullet.velocityX=0;
     var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
     if(damage>10){
       wall.shapeColor=color(255,0,0);
     }
     if(damage<10){
       wall.shapeColor=color(0,255,0);
     }
   }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}