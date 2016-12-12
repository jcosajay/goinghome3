function level000(){


  clear();
  background(50,50,255);

  fill(255);
  textSize(400)
  
  secretdraw = false;
  

  //text(hero_sprite.velocity.x,100,100);
  text("level000",1000,300);
  /*
  //use the standing frame if the character velocity drops below a certain amount
  if(hero_sprite.velocity.x < 0.1 && hero_sprite.velocity.x > -0.1){
    //hero_sprite.changeAnimation('hero');
    //if close to the mouse, don't move
    hero_sprite.velocity.x = 0;
  }
  */
  
  //CAMERA ROLLING, LIGHTS, ACTION.
  /*
  if(hero_sprite.position.x < width){
    camera.position.x  = width - 200;
    
  }else{
  */
  camera.position.x = hero_sprite.position.x;
  
  camera.position.y = hero_sprite.position.y;
  
  
  
  hero_sprite.velocity.x = 0;
  

  
  if (keyIsDown(LEFT_ARROW))
    hero_sprite.velocity.x = -20;
    //hero_sprite.scale = .5;
    
  if (keyIsDown(RIGHT_ARROW))
    hero_sprite.velocity.x += 60;
    //hero_sprite.scale = .5;
    
  if (keyIsDown(DOWN_ARROW))
    hero_sprite.velocity.x = 10;
    
  
  
  /////////////////////////////////////////////////////////////////
  
/*
  
    //I can just check a point against a collider
  if(levelUp.overlapPoint(hero_sprite.position.x, hero_sprite.position.y)){
      //hero_sprite.remove();
      gameState = 'countDown1';
      
  }
  */
  
  levelUp.overlap(hero_sprite,level2Clear);
  
  var offset = 35;
    if(platform.overlapPixel(hero_sprite.position.x, hero_sprite.position.y+offset)==false)
    hero_sprite.velocity.y += GRAVITY;
    
    
    while(platform.overlapPixel(hero_sprite.position.x, hero_sprite.position.y+offset))
    {
    hero_sprite.position.y--;
    hero_sprite.velocity.y = 0;;
    }
    
    var offset = 35;
    if(platform2.overlapPixel(hero_sprite.position.x, hero_sprite.position.y+offset)==false)
    hero_sprite.velocity.y += GRAVITY;
    
    
    while(platform2.overlapPixel(hero_sprite.position.x, hero_sprite.position.y+offset))
    {
    hero_sprite.position.y--;
    hero_sprite.velocity.y = 0;;
    }
    
   /* 
  if(hero_sprite.position.x < 2000){
    gameState = 'levelOne';
    
  }else{
  gameState = 'countDown1';
  }*/

  //draw the sprite
  drawSprites();
  
  camera.off();
  image(frame,0,00);
  
}