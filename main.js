document.addEventListener("DOMContentLoaded", function(event) {


let tetrisOne = new TetrisGame();

// newBlock();
// draw();
tetrisOne.newBlock();
tetrisOne.updateCanvas();
tetrisOne.animateFalling();


});