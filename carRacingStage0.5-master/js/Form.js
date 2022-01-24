class Form {
  constructor() {
    this.input = createInput("name");
    this.button= createButton("botao nao aperte");
    this.greeting= createElement("h1");
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(displayWidth/2 -45,0 );
    
    this.input.position(displayWidth/2 -35, displayHeight/2 -75);
    this.button.position(displayWidth/2 +25, displayHeight/2 -1);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name );
      this.greeting.position(displayWidth/2 -65, displayHeight/4);
    });

  }
}
