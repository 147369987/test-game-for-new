var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup, car4Group;
var SC;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  bgImg = loadImage("bg.jpg");
  boyImg = loadImage("boy1.png");
  teleImg = loadImage("tele.png");
boyImg3 = loadImage("boy6.png");
boyImg2 = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png")
boyImg4 = loadAnimation("boy6.png","boy7.png","boy8.png","boy9.png","boy10.png");
//boyImg5 = loadImage("fall.png");
  cashImg = loadImage("Coin.png");
  diamondsImg = loadImage("C2.png");
  jwelleryImg = loadImage("C4.png");
  swordImg = loadImage("new.png");
  endImg =loadAnimation("game.png");
  brickImg = loadImage("brick.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(bgImg);
path.scale = 0.5;



//creating boy running
    boy = createSprite(width/2,height-90,20,20);
    boy.addImage("stand",boyImg);
    boy.addImage("stand2",boyImg3);
 //   boy.addImage("fall",boyImg5)
   boy.addAnimation("walking",boyImg2);
   boy.addAnimation("walking2",boyImg4);
    boy.scale = 0.3;

    brick= createSprite(width/2,height-250,20,20);
    brick.addImage(brickImg);
    brick.scale = 0.3; 
    
    brick2= createSprite(width/2,height-3,20,20);
    brick2.addImage(brickImg);
    brick2.scale = 0.3;

    tele= createSprite(width/1,height-100,20,20);
    tele.addImage(teleImg);
    tele.scale = 0.4;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
  

}

function draw() {
    
  if(gameState===PLAY){
  background(0);
  
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height){
    path.y = height/2;

    
  
  }
  if ((touches.length>0||keyDown("space"))) {
    boy.x = boy.x + 10;
    boy.changeAnimation("walking",boyImg2)
  }
  if (keyDown(LEFT_ARROW)) {
    boy.x = boy.x - 10;
    boy.changeAnimation("walking2",boyImg4)
  }

  if (keyWentUp(RIGHT_ARROW)) {
 
    boy.changeAnimation("stand",boyImg);
  }
  if (keyWentUp(LEFT_ARROW)) {
 
    boy.changeAnimation("stand2",boyImg3);
  }
   
    
   
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+10;
    }
    else if (diamondsG.isTouching(boy)) {
      gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
      
    }else if(jwelleryG.isTouching(boy)) {
      gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(30);
  fill("yellow");
  text("Coins:"+ treasureCollection,150,30);
    
   
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.2;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.1;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.2;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}