
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("running",monkey_running); 
 monkey.scale = 0.1;
 
 ground = createSprite(400,350,900,10);
 ground.velocityX = -4;
 
}


function draw() {
background (220);
if(ground.x < 450){
   ground.x = ground.width/2;
}
if(keyDown("space")){
  monkey.velocityY = -12;
}
monkey.velocityY = monkey.velocityY + 0.8;  
monkey.collide(ground);
lifetime();
food();
obstacle();  
drawSprites();  
}
function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(50,200));
    banana.addImage("fruit",bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifeTime = 200;
  }
}
function obstacle(){
  if(frameCount % 300 === 0){
  stone = createSprite(600,315,50,50);
  stone.addImage("rock",obstacleImage);
  stone.scale = 0.2;
  stone.velocityX = -4;
  }
}
function lifetime(){
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time :" + survivalTime,100,50);
}



