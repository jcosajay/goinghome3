function levelTwo(){


  clear();
  background(150);

  fill(255);
  textSize(400)
  
  
  text(hero_sprite.velocity.x,100,100);
  secretdraw = true;
  secret.overlap(hero_sprite,level000);
  if(secretdraw){
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
    
  }else{*/
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
    
  if (keyIsDown(UP_ARROW))
    hero_sprite.velocity.y = -2;
  
  levelUp.overlap(hero_sprite,level2Clear);
  secret.overlap(hero_sprite,level000);
  
  var offset = 35;
    if(platform.overlapPixel(hero_sprite.position.x, hero_sprite.position.y+offset)==false)
    hero_sprite.velocity.y += GRAVITY;
    
    
    while(platform.overlapPixel(hero_sprite.position.x, hero_sprite.position.y+offset))
    {
    hero_sprite.position.y--;
    hero_sprite.velocity.y = 0;;
    }

  
  //draw the sprite
  drawSprites();
    camera.off();
  image(frame,0,00);
  }
}