var canvas, backgroundImage;
var humanidade;
var distance = 0;
var gameState = 0;
var playerCount;

var database;

var carro,carrinho,carrao,carzgul;
var carros5
var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-21,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){ 
    game.update(1); 
  } 
  if(gameState === 1){ 
    clear(); game.play(); 
  }
}
