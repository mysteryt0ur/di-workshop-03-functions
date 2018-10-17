function setup() {
  //createCanvas creates a space in which your product will be created.
  createCanvas(400, 400)
  //background determines the colour of the canvas e.g. 0 = black and 255 = white.
  background(255)
}

function draw() {
  //fill determines the fill colour of the product you are creating.
  fill(255, 130, 0)
  //
  stroke(0)
  //stroke changes the outline colour of what you are creating.
  house(5, 30)
  //This creates a rectangle - the first two co-ordinates decide the positioning of the top left corner of the rectangle, whilst the last two numbers determine the width and height of the shape.
}

function square(x, y, size) {
  rect(x, y, size, size)
  //Absolutely nothing changes - this is because the shape is now a square instead of a rectangle, meaning that you do not need the last number as a square has four equal sides instead of a rectangle which has two equal sides then two other equal sides.

}

function roof(x, y) {
  triangle(x-x, y, x+35, y-y, x+75, y)
  //This creates a traingle - each two numbers states the co-orindates of one of the points of the triangle.

}

function house(x, y) {
  roof(x, y)
  square(x, y, 70)
}
