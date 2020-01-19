import Game from "./0_game";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

let GAME_WIDTH  = 800
let GAME_HEIGHT = 500


let game = new Game(GAME_WIDTH, GAME_HEIGHT)

game.start();


let lastTime = 0
function gameLoop(timestamp){
  let deltaTime = timestamp - lastTime
  lastTime = deltaTime

  ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT)

  game.update(deltaTime);
  game.draw(ctx);
  requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)
