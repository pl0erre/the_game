
document.addEventListener("DOMContentLoaded", function(event) {

  var pauseMessage = "\nGame Paused\nPress `SPACE` to continue";
  var game = new Game();
  var gameMusic = new Audio("Sounds/game.mp3")
  
  // ===== MUSIC =====
  gameMusic.load();
  gameMusic.oncanplaythrough = function(){
    gameMusic.play();
  }
  // =================

  // ===== BUTTONS =====
  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: // left
          game.propagate([-1,0]);
          game.draw();
            break;
        case 38: // up
          game.rotate();
          game.draw();
            break;
        case 39: // right
          game.propagate([1,0]);
          game.draw();
          break;
        case 40: // down
          game.propagate([0,1]);
          game.draw();
          break;
        case 32: //Space
          alert(pauseMessage)
        default:
          break;
    }
  }
  // =====================

// document.getElementsByClassName("btn-start")[0].addEventListener("click",);
// document.getElementsByClassName("btn-reset")[0].addEventListener("click",);
});

// document.getElementsByClassName("btn-pause")[0].addEventListener("click", alert(pauseMessage));