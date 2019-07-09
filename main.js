
document.addEventListener("DOMContentLoaded", function(event) {

var canvas = document.getElementsByClassName("canvas")[0];
var ctx = canvas.getContext("2d");
    ctx.scale(1,1);
var shapeOne;
var randomShape;
var randomColor;

  function randShape() {
    var randNr = (Math.floor(Math.random()*shapesArr.length));
    randomShape = shapesArr[randNr][0];
    randomColor = shapesArr[randNr][1];
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapeOne.draw(ctx);
  }

  function moveDown() {
    shapeOne.y += boxSize;
  }

  function startGame() {
    
    randShape();
    shapeOne = new Shape(randomShape, canvas.width/2, 0, randomColor);
    draw();

    setInterval(() =>  {
      
      moveDown();
      draw();

    }, timer);
  }

  startGame();

});