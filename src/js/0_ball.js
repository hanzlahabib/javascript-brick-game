export default class Ball {
  constructor(game){
    this.image = document.getElementById('gameBall')
    this.gameWidth = game.gameWidth
    this.gameHeight = game.gameHeight
    this.position = {x: 10, y: 10}
    this.speed = {x: 2, y: 2}
    this.ballSize = 16
    this.game = game
  }


  draw(ctx){
    // console.log(this.image)
    ctx.drawImage(this.image, this.position.x, this.position.y , this.ballSize, this.ballSize)
  }

  update(deltaTime){
    // if(!deltaTime) return
    this.position.x += this.speed.x
    this.position.y += this.speed.y

    // wall on left or right
    if(this.position.x  < 0 || this.position.x + this.ballSize > this.gameWidth  ){
      this.speed.x = -this.speed.x
    }

    // wall on top or bottom
    if(this.position.y  < 0 || this.position.y + this.ballSize > this.gameHeight  ){
      this.speed.y = -this.speed.y
    }

    // check collision
    let bottomOfBall = this.position.y + this.ballSize;
    let topOfPaddle = this.game.paddle.position.y;
    let leftOfPaddle = this.game.paddle.position.x + this.game.paddle.width
    let rightOfPaddle = this.game.paddle.position.x;


if(bottomOfBall >= topOfPaddle && this.position.x >= rightOfPaddle && this.position.x <= leftOfPaddle){
  console.log(bottomOfBall, topOfPaddle)
  this.speed.y = -this.speed.y
  this.position.y = this.game.paddle.position.y - this.ballSize
}
  }

}
