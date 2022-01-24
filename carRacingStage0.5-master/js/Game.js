class Game { 
  constructor(){} 
  getState(){
   var gameStateRef = database.ref('gameState'); 
   gameStateRef.on("value",function(data){ gameState = data.val();
   }) } 
   update(state){ database.ref('/').update({ gameState: state });
   } 
  async start(){ 
    if(gameState === 0){ 
      player = new Player(); 
      var playerCountRef = await database.ref('playerCount').once("value"); 
      if(playerCountRef.exists()){
       playerCount = playerCountRef.val(); 
       player.getCount(); 
      } 
      form = new Form() 
      form.display(); 
    } } 
    carro=createSprite(102,200);
    carrinho=createSprite(302,200);
    carrao=createSprite(502,200);
    carzgul=createSprite(702,200);
    carros5 = [carro,carrinho,carrao,carzgul];

    play(){ form.hide(); textSize(30); 
      text("Game Start", 120, 100); 
      Player.getPlayerInfo(); 
      if(humanidade !== undefined){ 
        //var display_position = 130; 
        var index=0;
        var x=0;
        var y;
        for(var plr in humanidade){ 
          index++;
          x+=200;
          y=displayHeight-humanidade[plr].distance;
          carros5[index-1].x=x;
          carros5[index-1].y=y;
          if(index===player.index){
            carros5[index-1].shapeColor="red";
            camera.position.x = displayWidht/2;
            camera.position.y = carros5[index-1].y;
          }
          /*if (plr === "player" + player.index) fill("red"); 
          else fill("black"); 
          display_position+=20;
          textSize(15); 
          text(humanidade[plr].name + ": " + humanidade[plr].distance, 120, display_position); */
        } 
      } 
        if(keyIsDown(UP_ARROW) && player.index !== null){ 
          player.distance +=50; player.update(); 
        } 
      drawSprites();
      } 
    }

