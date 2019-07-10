
document.addEventListener("DOMContentLoaded", function(event) {

var canvas = document.getElementsByClassName("canvas")[0];
var ctx = canvas.getContext("2d");
    ctx.scale(1,1);
var shapeOne;
var randomShape;
var randomColor;
var randNr;


  function randShape() {
    randNr = (Math.floor(Math.random()*shapesArr.length));
    randomShape = shapesArr[randNr][0];
    randomColor = shapesArr[randNr][1];
    ctx.fillStyle = randomColor;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapeOne.draw(ctx);
  }

  function moveDown() {
    shapeOne.y += boxSize;
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: // left
          shapeOne.x -= 45;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          shapeOne.draw(ctx);
            break;
        case 38: // up
          shapeOne.rotateShape();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          shapeOne.draw(ctx);
            break;
        case 39: // right
          shapeOne.x += 45;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          shapeOne.draw(ctx);
          break;
        case 40: // down
            shapeOne.y += 45;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            shapeOne.draw(ctx);
            break;
    }
  };

  function startGame() {
    
    randShape();
    shapeOne = new Shape(randomShape, 135, 0, randomColor);
    draw();

    setInterval(() =>  {
      
      moveDown();
      draw();

    }, timer);
  }

  startGame();

});