var hero;
var hero_sprite;
var platform;
var platform2;
var GRAVITY = 1;
var JUMP = -5;
var gameState;
var bg_title, bg_win, bg_lose, bg_level1, bg_level2, bg_level3, bg_countdown, intro;
var frame;
var powerUp;
var bkgr;


var countDowntimer = 0;
var count1Downtimer = 0;
var count2Downtimer = 0;
var count3Downtimer = 0;

var levelUp;
var gameState = 'startUp';
var intro = 'intro';

var secretdraw = true;

var hero_frames = [

  {'name':'heroLeft_00000', 'frame':{'x':0, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00001', 'frame':{'x':256, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00002', 'frame':{'x':512, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00003', 'frame':{'x':768, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00004', 'frame':{'x':1024, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00005', 'frame':{'x':1280, 'y': 0, 'width': 256, 'height': 256}}
  

  ];



function preload() {
  //platform = loadImage("assets/platform3.png");
  intro = loadImage("assets/WELCOME.png");
  bkgr = loadImage("assets/levelOne.png");
  //bkgr = loadImage("assets/levelTwo.png");
  
  hero_sheet = loadSpriteSheet('assets/spriteSheet.png', hero_frames);
  
  hero_animation = loadAnimation(hero_sheet);
}



function setup() {
  createCanvas(1920, 1080);

  levelUp = new Group();
  hero_sprite = new Group();

  // Create the Player sprite and add it's animations
  hero_sprite = createSprite(width / 2, height / 3);
  hero_sprite.scale = .4
  hero_sprite.addAnimation('hero',hero_animation);
  //hero_sprite.addImage(loadImage("assets/hero3.png"));
  hero_sprite.setCollider('rectangle',-20,0,150,95);
  hero_sprite.friction = 0.9;
  hero_sprite.debug = true;
  //hero_sprite.friction = 0.8;

  platform = createSprite(3000, 600, 0, 0);
  platform.addImage(loadImage("assets/platform9.png"));
  


  levelUp = createSprite(1700, 600, 90, 90);
  levelUp.debug = true;
  
  
  
  secret = createSprite(1500, 475, 500, 30);
  secret.debug = true;
  
  powerUp = createSprite(1800,550,50,50);
  powerUp = debug = true;


  frame = loadImage("assets/frame.png");

  hero_sprite.depth = 5;
}

function draw() {

  switch (gameState) {
    case 'startUp':
      background(intro);
      break;


    case 'levelOne':
      levelOne();
      break;

    case 'levelTwo':
      levelTwo();
      break;

    case 'levelThree':
      levelThree();
      break;
      
    case 'levelSecret':
      level000();
      break;
      
    case 'win':
      background(intro);
      break;




    case 'intro':
      background('255');
      //text('timer to lvl1', width / 2, height / 2);
      //only runs the first time through the coutdown
      if (countDowntimer === 0) {
        countDowntimer = frameCount;
      }
      var flooredCount = floor((frameCount - countDowntimer) / 20);

      //advance to level 2
      if (flooredCount > 3) {
        gameState = "levelOne";
      }
      break;


    case 'countDown1':
      background(intro);
      //only runs the first time through the coutdown
      if (count1Downtimer === 0) {
        count1Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count1Downtimer) / 50);
      //advance to level 2
      if (flooredCount > 3) {
        gameState = "levelTwo";
        hero_sprite.position.x = 1000;
      }
      break;




    case 'countDown2':
      background(intro);
      //only runs the first time through the coutdown
      if (count2Downtimer === 0) {
        count2Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count2Downtimer) / 50);
      //advance to level 2
      if (flooredCount > 3) {
        gameState = "levelThree";
        hero_sprite.position.x = 1000;
      }
      break;
      
    case 'countDownSecret':
      background(intro);
      //only runs the first time through the coutdown
      if (count2Downtimer === 0) {
        count2Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count2Downtimer) / 50);
      //advance to level 2
      if (flooredCount > 3) {
        gameState = "levelSecret";
        hero_sprite.position.x = 1000;
      }
      break;

}

}


function keyTyped() {
  if (key === 'x') {
    gameState = 'intro';
  }
  if (keyCode  === UP_ARROW)
  {hero_sprite.velocity.y = -200;}
  return false;
}

