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
