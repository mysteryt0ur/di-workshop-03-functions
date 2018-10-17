var x = 0
var speed = 2

function setup() {
  createCanvas(300, 100)
}

function draw() {
  background(0)

  x = x + speed

  if (ballShouldBounce(ballPosition)) {
    speed = speed * -1
}

  function ballShouldBounce(ballPosition) {
      if (ballPosition <= 0 && ballPosition >= 300) {
      return true;
}

  ellipse(x, 30, 10, 10)
}
