var monkey, monkey_image, monkey_running;
var banana,bananaImage;
var obstacle, obstacleImage, obstacleGroup;
var FoodGroup, obstacleGroup;
var score = 0;
var ground;
var survivalTime = 0;

function preload(){
  //load animation for the monkey
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
    
  //load image for banana
  bananaImage = loadImage("banana.png");
  
  //load image for the obstacle
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {  
  //create the monkey and give it properties
  monkey = createSprite(80,315,80,80);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  //create the food group
  foodGroup = new Group();
  
  //create the obstacle group
  obstacleGroup = new Group();
}


function draw() {
  //give the background color
  background(255);
  
  //increase the score
  score = score + (frameCount/10);
  
  stroke("white");
  textSize(20);
  fill("white ");
  text("Score: " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);
  
  //create the ground sprite
  ground = createSprite(400,350,900,10);
  //give velocity to the ground
  ground.velocityX = -4;
  //reset the ground
  ground.x = ground.width/2;
  //show the x position of the ground in the console
  console.log(ground.x);
  //give the ground color
  ground.shapeColor = "green";
  
  //make the monkey jump
  if(keyDown("space") && monkey.y > 200){
    monkey.velocityY = -15;
  }
  
  //give gravity to the monkey
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //make monkey collide with ground
  monkey.collide(ground);
  
  //create bananas
  bananas();
  
  //create obstacles
  obstacles();
  
  //draw the sprites
  drawSprites();
}

function bananas()  {
  if(frameCount % 80 === 0){
    banana = createSprite(400,Math.round(random(120,200)),10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -5;
    banana.lifetime = 200;
    foodGroup.add(banana);
  }
}

function obstacles()  {
  if(frameCount % 100 === 0){
    obstacle = createSprite(400,330);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.09;
    obstacle.velocityX = -10;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}