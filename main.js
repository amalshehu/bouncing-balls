// Setup canvas

var canvas = document.querySelector('canvas')

// canvas.getContext('2d') Returns an object that provides methods and properties
// for drawing and manipulating images and graphics on a canvas
// element in a document. A context object includes information
// about colors, line widths, fonts, and other graphic parameters
// that can be drawn on a canvas.

var ctx = canvas.getContext('2d')

var width = (canvas.width = window.innerWidth)
var height = (canvas.height = window.innerHeight)

// Function to generate random number

function random(min, max) {
  var num = Math.floor(Math.random() * (max - min)) + min
  return num
}
