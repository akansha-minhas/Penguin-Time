var PLAY = 1;
var END = 0;
var gameState = PLAY;

var penguin, penguinImg, penguinGroup;
var fish, fishImg, fishGroup;
var seal, sealImg, sealGroup;
var ground, groundImg;

var score=0;










function preload(){
penguinImg = loadImage("Penguin.jpg");
fishImg = loadImage("Fish.png");
sealImg = loadImage("seal.jpg");
groundImg = loadImage("Ice.jpg");





}

function setup() {
    createCanvas(400,400);
 

ground = createSprite(0,0,400,400);
ground.addImage(groundImg);
ground.scale = 2.5;

score = 0
fishGroup = new Group();
sealGroup = new Group();

penguin = createSprite(200,200,50,50);
penguin.addImage(penguinImg);

penguin.scale = 0.3


 
}

function draw() {
    background(225);



 if (gameState === PLAY) {

    penguin.x = World.mouseX;

ground.velocityY = -3

     if (ground.y > 0 ) {
         ground.y = ground.width/2;
     }  
     
     if (World.frameCount % 100 == 0) {
    switch(select_object ){
        case 1: fishGroup();
        break;
        case 2: sealGroup();
        break;
        default:break;
    }    
    }

    if (seal.collide(penguin)) {
    seal.destroyEach();
    fish.destroyEach();
    penguin.destroy();
    gameState=END; 
   }
 }


 if (gameState === END) {
    ground.velocityY = 0;
}

if (fish.collide(penguin)) {
    fish.destroy();
    score=score+1;
  }


 drawSprites();
 text("Score:"+ score, 300, 50);
}



function createFish() {
var fishies = createSprite(0,Math.round(random(20,370)), 10,10 );
   fishies.addImage(fishImg);
   fishies.lifetime = 150;
   fishies.scale = 0.1
   fishGroup.add(fishies);   
}

function createSeal() {
var seals = createSprite(0,Math.round(random(20,370)), 10,10);
    seals.addImage(sealImg);
    seals.lifetime = 150;
    seals.scale = 0.1
    sealGroup.add(seals);
}
