import Paddle from './0_Paddle'
import InputHandle from './0_Input';
import Ball from './0_ball'

export default class Game {

  constructor(gameWidth, gameHeight) {
    this.gameHeight = gameHeight
    this.gameWidth = gameWidth
  }


  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this)
    this.gameObjects = [this.ball, this.paddle];
    new InputHandle(this.paddle);
  }

  draw(ctx) {
    this.gameObjects.forEach(obj => obj.draw(ctx))
  }

  update(deltaTime) {
    this.gameObjects.forEach(obj => obj.update(deltaTime))
  }
}
