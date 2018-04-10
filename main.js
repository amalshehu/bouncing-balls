// Setup canvas

var canvas = document.querySelector('canvas')

// canvas.getContext('2d') returns an object that directly represents
// the drawing area of the canvas and
// allows us to draw 2D shapes on it.

var ctx = canvas.getContext('2d')

var width = (canvas.width = window.innerWidth)
var height = (canvas.height = window.innerHeight)

// Function to generate random number

function random(min, max) {
  var num = Math.floor(Math.random() * (max - min)) + min
  return num
}

function Ball(x, y, velX, velY, color, size) {
  this.x = x
  this.y = y
  this.velX = velX
  this.velY = velY
  this.color = color
  this.size = size
}

Ball.prototype.draw = function() {
  //  beginPath() to state that we want to draw a shape on the paper.
  ctx.beginPath()
  //  fillStyle to define what color we want the
  //  shape to be — we set it to our ball's color property.
  ctx.fillStyle = this.color
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
  ctx.fill()
}

Ball.prototype.update = function() {
  if (this.x + this.size >= width) {
    this.velX = -this.velX
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY
  }

  this.x += this.velX
  this.y += this.velY
}
