
document.addEventListener("DOMContentLoaded", function(event) {

  var pauseMessage = "Game paused. Press `Enter` to continue"
  var game = new Game();

  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: // left
          game.currentShape.x -= 45;
            break;
        case 38: // up
          game.currentShape.rotateShape();
            break;
        case 39: // right
          game.x += 45;

          break;
        case 40: // down
          game.y += 45;
          break;
        default:
          // alert("Invalid Key");
          break;
    }
  }



document.getElementsByClassName("btn-start")[0].addEventListener("click",);
document.getElementsByClassName("btn-reset")[0].addEventListener("click",);
document.getElementsByClassName("btn-pause")[0].addEventListener("click", alert(pauseMessage));


});

  

























  // 







  /*
var canvas = document.getElementsByClassName("canvas")[0];
var ctx = canvas.getContext("2d");
    ctx.scale(1,1);

var shapeOne;
var randomShape;
var randomColor;
var randNr;
var intervalId;


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


  // =============================================================
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
  document.getElementsByClassName("btn-start")[0].addEventListener("click", startGame);
  document.getElementsByClassName("btn-reset")[0].addEventListener("click", resetGame);
  //===============================================================


  function startGame() {
    
    randShape();
    shapeOne = new Shape(randomShape, 135, 0, randomColor);
    draw();

    intervalId = setInterval(() =>  {
      
      moveDown();
      draw();

    }, timer);
  }

  function resetGame() {  //currently wiping the whole canvas
    clearInterval(intervalId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  }

});
*/
