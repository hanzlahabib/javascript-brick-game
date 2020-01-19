export default class InputHandle {

  constructor(paddle) {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 37:
          paddle.moveLeft()
          break;
        case 39:
          paddle.moveRight()

        default:
          break;
      }
    })

    document.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case 37:
          if(paddle.speed < 0)
          paddle.stop()
          break;
        case 39:
          if(paddle.speed > 0)
          paddle.stop()

        default:
          break;
      }
    })
  }
}
