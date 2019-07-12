
let fullRowSound = new Audio("sounds/explode.ogg");

// ===== SHAPES AND CONSTANTS =====
const timer = 500;
const boxSize = 45;
const rowAmount = 18;
const canvasHight = 810;
const canvasWidth = 450
const borderColor = "#191970";
const borderSize = 3;

const shape_b = [[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]]];
const shape_j = [[[1,1,1],[0,0,1],[0,0,0]],[[0,1,0],[0,1,0],[1,1,0]],[[1,0,0],[1,1,1],[0,0,0]],[[1,1,0],[1,0,0],[1,0,0]]];
const shape_l = [[[1,1,1],[1,0,0],[0,0,0]],[[1,1,0],[0,1,0],[0,1,0]],[[0,0,1],[1,1,1],[0,0,0]],[[1,0,0],[1,0,0],[1,1,0]]];
const shape_i = [[[1,1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0]],[[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]],[[1,1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0]],[[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]]];
const shape_t = [[[1,1,1],[0,1,0],[0,0,0]],[[0,0,1],[0,1,1],[0,0,1]],[[0,1,0],[1,1,1],[0,0,0]],[[1,0,0],[1,1,0],[1,0,0]]];
const shape_s = [[[0,1,1],[1,1,0],[0,0,0]],[[1,0,0],[1,1,0],[0,1,0]],[[0,1,1],[1,1,0],[0,0,0]],[[1,0,0],[1,1,0],[0,1,0]]];
const shape_z = [[[1,1,0],[0,1,1],[0,0,0]],[[0,1,0],[1,1,0],[1,0,0]],[[1,1,0],[0,1,1],[0,0,0]],[[0,1,0],[1,1,0],[1,0,0]]];

const shapesArr = [
        [shape_b, "#00CC2C"],
        [shape_j, "#03396C"],
        [shape_l, "#FF6289"],
        [shape_i, "#9B59B6"],
        [shape_t, "#F36B2C"],
        [shape_s, "#8B008B"],
        [shape_z, "#A40B0B"]
        ];
// ===== END SHAPES AND CONSTANTS =====


//  ===== BOX CLASS =====
class Box {
  constructor(x, y, size,) {
    this.x = x,
    this.y = y,
    this.size = size,
    this.shape = ""
  }
}
//  ===== END BOX CLASS =====


//  ===== SHAPE CLASS =====
class Shape {
  constructor(inputShape, x, y, color) {
    this.rotationCounter = 0;
    this.defaultShape = inputShape;
    this.currentShape = inputShape[this.rotationCounter];
    this.color = color;
    this.shape = this.generateShape(x, y);
  }

  rotate() {
    this.rotationCounter++;
    this.rotationCounter = this.rotationCounter % 4;
    this.currentShape = this.defaultShape[this.rotationCounter];
    let [x, y] = this.shape.reduce((arr, box) => [arr[0] + box.x, arr[1] + box.y], [0, 0]).map(i => Math.floor((i/this.shape.length)/boxSize)*boxSize);
    
    let currentShapeBoxesTemp = [].concat(this.shape);
    this.shape = this.generateShape(x, y);
    let checkWall = true

    for (let i = 0; i < this.shape.length; i++) {
      if (this.shape[i].x  === 0 || this.shape[i].x + boxSize >= canvasWidth) {
        checkWall = false;
      }
    }
    if(!checkWall) {
      this.rotationCounter--;
      this.rotationCounter = this.rotationCounter < 0 ? 3 : this.rotationCounter;
      this.shape = currentShapeBoxesTemp;
    }
  }

  // Translates the shape arrays to a collection of boxes corresponding to the selected shape
  generateShape(x, y) {
    let boxes = [];
    for(let i = 0; i < this.currentShape.length; i++) {
      for(let j = 0; j < this.currentShape[i].length; j++) {

        if(this.currentShape[i][j] == 1) {
          boxes.push(new Box(x + j * boxSize, y + i * boxSize, boxSize, this.color));
        }
      }
    }
    return boxes;
  }

  // draw the shape by drawing every single box in this shape
  draw(ctx) {
    ctx.fillStyle = borderColor;
    this.shape.forEach(box => ctx.fillRect(box.x, box.y, box.size, box.size));
    ctx.fillStyle = this.color;
    this.shape.forEach(box => ctx.fillRect(box.x, box.y, box.size-borderSize, box.size-borderSize));
  }

  // use of [x,y] (45 * 0 = 0; 45 * 1 = 45; 45 * -1 = -45) array to add or substract 45 to the x and y values of each box in a shape. 
  // modification by arrow keys is done here
  propagateShape(relCoordinates) {
    
    let checkWall = true

    for (let i = 0; i < this.shape.length; i++) {
      if (this.shape[i].x  === 0 && relCoordinates[0] === -1 || this.shape[i].x + boxSize == canvasWidth && relCoordinates[0] === 1) {
        checkWall = false;
      }
    }

    if (checkWall === false) {
      for (let i = 0; i < this.shape.length; i++) {
        this.shape[i].x += boxSize * 0
        this.shape[i].y += boxSize * relCoordinates[1];
      }
    } else if (checkWall === true) {
      for (let i = 0; i < this.shape.length; i++) {
        this.shape[i].x += boxSize * relCoordinates[0];
        this.shape[i].y += boxSize * relCoordinates[1];
        } 
    }
  }
}
//  ===== END SHAPE CLASS =====


//  ===== BOARD CLASS =====
class Board {
  constructor() {
    this.gridOfBoxes = [];
  }

  // adds boxes to the grid. (Takes shape apart and pushes evey box in the gridOfBoxes Array)
  addBoxes(newBoxes) {
    for(let i = 0; i < newBoxes.length; i++) {
      this.gridOfBoxes.push(newBoxes[i]);
    }
  }

  // draws grid of boxes using provided colors
  draw(ctx) {
    ctx.fillStyle = borderColor;
    this.gridOfBoxes.forEach(box => ctx.fillRect(box.x, box.y, box.size, box.size));
    ctx.fillStyle = "#696969";
    this.gridOfBoxes.forEach(box => ctx.fillRect(box.x, box.y, box.size-borderSize, box.size-borderSize));
  }

  // checks x and y if box already exists in gridOfBoxes or if it is out of boundaries (canvas = 450pxx810px)
  doesBoxFit(box) {
    if (box.y >= canvasHight - box.size)
        return false;
    

    for (let i = 0; i < this.gridOfBoxes.length; i++) {
      if (this.gridOfBoxes[i].x === box.x && (this.gridOfBoxes[i].y)-boxSize === box.y) {
        return false;
      }
    }
    return true;
  }

  //  loops over shape array and makes sure that all boxes fit - uses doesBoxFit to check every box in the shape
  doesShapeFit(currentShape) {
    for (let i = 0; i < currentShape.shape.length; i++) {
      if (!this.doesBoxFit(currentShape.shape[i])) {
        return false;
      }
    }
    return true;
  }

  reachedTop() {
    for (let i = 0; i < this.gridOfBoxes.length; i++) {
      if (this.gridOfBoxes[i].y === -boxSize) {
        return true;
      }
    }
  return false;
  }

  isFullRow() {
    let rowCounter = [];
    // generate array with 18 zeros, one for each row
    for (let i = 0; i < rowAmount; i++) {
      rowCounter.push(0);
    }
    //  loop over grid and increment counter for each specific row
    for (let j = 0; j < this.gridOfBoxes.length; j++) {
      if (this.gridOfBoxes[j].y % boxSize === 0) {
        rowCounter[Math.floor(this.gridOfBoxes[j].y/boxSize)]++;
      }
    }
    for(let num = 0; num < rowCounter.length; num ++) {
      if(rowCounter[num] > 9) return num*boxSize;
    }
  }

  // loop over grid and look for objects with fullRowPosition y value
  // if detected --> delete
  deleteRow(fullRow) {
    this.gridOfBoxes = this.gridOfBoxes.filter(box => box.y !== fullRow)
    fullRowSound.play();
  }

  // moves all boxes in the grid by one boxSize
  propagateBoard(fullRow) {
    for (let i = 0; i < this.gridOfBoxes.length; i++) {
      if(this.gridOfBoxes[i].y > fullRow) continue;
      this.gridOfBoxes[i].y += boxSize;
    }
    this.rowsScore();
  }

  rowsScore() {
    var rowsSum = document.getElementById('rows');
    var rowCounter = rowsSum.innerHTML;
    var rowsScore = document.getElementById('rows-score');
    var scoreCounter = parseInt(rowsScore.innerHTML);
    rowCounter++;
    rowsSum.innerHTML = rowCounter;
    scoreCounter += 120;
    rowsScore.innerHTML = scoreCounter;
  }

}
//  ===== END BOARD CLASS =====


//  ===== GAME CLASS =====
class Game {
  constructor() {
    this.board = new Board(); // create new board using Board class and assign to this.board
    this.currentShape =  this.getRandShape(); // pick a random shapes array and pass it to Shape class to build a new shape
    this.canvas = document.getElementsByClassName("canvas")[0]; // select canvas ans assign to this.canvas
    this.play(); // execute play() method when new Game is created (see play();)
  }

  // selects a random shape from the shapesArr. This is then stored in this.currentShape
  getRandShape() {
    let randNr = (Math.floor(Math.random()*shapesArr.length));
    let randomShape = shapesArr[randNr][0];
    let randomColor = shapesArr[randNr][1];
    return new Shape(randomShape, 180, -90, randomColor)
  }

  // The interval which executes propagation and drawing of the board + the current falling shape
  play() {
   this.intervalId = setInterval(function() {
     this.propagate([0,1]); // y = 1 --> (see propagateShape) increases y by 45 every interval.
     this.draw();
   }.bind(this), timer)
  }

  rotate() {
    // checks if current shape is undefined. If so generates new shape.
    if(this.currentShape === undefined) {
      this.currentShape = this.getRandShape();
      return;
    }
    // if shape is present, make a copy for backup (currentShapeBoxesTemp).
    let currentShapeBoxesTemp = [].concat(this.currentShape.shape);
    // propagate shape
    this.currentShape.rotate();
    // if collision, add currentShapeBoxes to grid and set currentShape to undefined (will automatically generate a new shape in next iteration.)
    if (!this.board.doesShapeFit(this.currentShape)) {
      this.currentShape.shape = currentShapeBoxesTemp;
    }
    // when done, draw 
    this.draw();
  }

  propagate(relCoordinates) {
    // checks if current shape is undefined. If so generates new shape.
    if(this.currentShape === undefined) {
      this.currentShape = this.getRandShape();
      return;
    }
    // if shape is present, make a copy for backup (currentShapeBoxesTemp).
    let currentShapeBoxesTemp = [].concat(this.currentShape.shape);
    // propagate shape
    this.currentShape.propagateShape(relCoordinates);
    // if collision, add currentShapeBoxes to grid and set currentShape to undefined (will automatically generate a new shape in next iteration.)
    if (!this.board.doesShapeFit(this.currentShape)) {
      this.currentShape = undefined;
      this.board.addBoxes(currentShapeBoxesTemp);
      let fullRow = this.board.isFullRow();

      while (fullRow >= 0) {
        this.board.deleteRow(fullRow);
        this.board.propagateBoard(fullRow);
        fullRow = this.board.isFullRow();
      }

      if (this.board.reachedTop()) {

        alert("\nGAME OVER !\n\nThis was all your fault, the game works perfectly fine and there are no bugs.");
        clearInterval(this.intervalId);
        // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
    // when done, draw 
    this.draw();
  }

  draw() {
    // necessary on order to draw on canvas
    let ctx = this.canvas.getContext("2d");

    // wipe the canvas before redrawing
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // when currentShape is not undefinde --> draw it
    if(this.currentShape !== undefined) this.currentShape.draw(ctx);

    // also draw the board.
    this.board.draw(ctx)
  }

  stopGame() {
    clearInterval(this.intervalId);
  }
}
//  ===== END GAME CLASS =====