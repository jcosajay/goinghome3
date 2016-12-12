function groundTest(hero,platform){
  groundTouch = true;
}

function level1Clear(hero_sprite,levelUp){
   //remove all the platforms
   //do{platforms[0].remove (); }
   //while(platforms[0] !== undefined);
   
   //set the countdownTimer
   //countdownTimer = frameCount;
   
   //move the camera back to the begining
   camera.position.x = width/2;
   camera.position.y = height/2;
   //turn the camer off 
   //camera.off();
   
   //clear all the enemies in the group
//do{enemies1[0].remove (); }
//while(enemies1[0] !== undefined);
   //clear the group
//enemies1.clear();
   //change the countdown state
   gameState = "countDown1";
 
}

function level2Clear(hero_sprite,levelUp){
   //remove all the platforms
   //do{platforms[0].remove (); }
   //while(platforms[0] !== undefined);
   
   //set the countdownTimer
   //countdownTimer = frameCount;
   
   //move the camera back to the begining
   camera.position.x = width/2;
   camera.position.y = height/2;
   //turn the camer off 
   //camera.off();
   
   //clear all the enemies in the group
//do{enemies1[0].remove (); }
//while(enemies1[0] !== undefined);
   //clear the group
//enemies1.clear();

//secret.remove();

   //change the countdown state
   gameState = "countDown2";
 
}

function level3Clear(hero_sprite,levelUp){
   //remove all the platforms
   //do{platforms[0].remove (); }
   //while(platforms[0] !== undefined);
   
   //set the countdownTimer
   //countdownTimer = frameCount;
   
   //move the camera back to the begining
   camera.position.x = width/2;
   camera.position.y = height/2;
   //turn the camer off 
   //camera.off();
   
   //clear all the enemies in the group
//do{enemies1[0].remove (); }
//while(enemies1[0] !== undefined);
   //clear the group
//enemies1.clear();
   //change the countdown state
   gameState = "win";
 
}

function level000Clear(hero_sprite,secret){
   //remove all the platforms
   //do{platforms[0].remove (); }
   //while(platforms[0] !== undefined);
   
   //set the countdownTimer
   //countdownTimer = frameCount;
   secret = false;   //move the camera back to the begining
   camera.position.x = width/2;
   camera.position.y = height/2;
   //turn the camer off 
   //camera.off();
   
   //clear all the enemies in the group
//do{enemies1[0].remove (); }
//while(enemies1[0] !== undefined);
   //clear the group
//enemies1.clear();
   //change the countdown state
   gameState = "countDownSecret";
 
}

//function powerHit(){

//}