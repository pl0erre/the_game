var timer = 1000;
const boxSize = 45;

const shape_b = [
  [1,1],
  [1,1]
      ]

const shape_j = [
  [1,1,1],
  [0,0,1],
  [0,0,0]
      ]

const shape_l = [
  [1,1,1],
  [1,0,0],
  [0,0,0]
      ]

const shape_i = [
  [1,1,1,1],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
      ]

const shape_t = [
  [1,1,1],
  [0,1,0],
  [0,0,0]
      ]

const shape_s = [
  [0,1,1],
  [1,1,0],
  [0,0,0]
      ]

const shape_z = [
  [1,1,0],
  [0,1,1],
  [0,0,0]
      ]

const shapesArr = [
        [shape_b, "#00CC2C"],
        [shape_j, "#03396C"],
        [shape_l, "#FF6289"],
        [shape_i, "#9B59B6"],
        [shape_t, "#F36B2C"],
        [shape_s, "#1ABC9C"],
        [shape_z, "#A40B0B"]
        ];

// =======================================================

class Box {
  constructor(x, y, size,) {
    this.x = x,
    this.y = y,
    this.size = size,
    this.shape = ""
  }
}


class Shape {
  constructor(currentShape = [[]], x, y, color) {
    this.currentShape = currentShape,
    this.color = color,
    this.shape = this.generateShape(x, y)
  }

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

  draw(ctx) {
    ctx.fillStyle = this.color
    this.shape.forEach(box => ctx.fillRect(box.x, box.y, box.size, box.size))
  }

  fallShape() {
    this.shape.forEach(box => box.y += box.size)
  }

  rotateShape() {
    let rotate = [];
    for(let i = 0; i < this.currentShape.length; i++) {
        for(let j = 0; j < this.currentShape[i].length; j++) {
            if(!Array.isArray(rotate[j])) rotate[j] = [];
            rotate[j].unshift(this.currentShape[i][j]);
        }
    }
    this.currentShape = rotate;
  }
}


class Board {
  constructor() {
    this.gridOfBoxes = []; 
  }

  addBoxes(newBoxes) {
    for(let i = 0; i < newBoxes.length; i++) {
      this.gridOfBoxes.push(newBoxes[i]);
    }
  }

  draw(ctx) {
    ctx.fillStyle = "#00CC2C";
    this.gridOfBoxes.forEach(box => ctx.fillRect(box.x, box.y, box.size, box.size));
  }

  // checks if box already exists
  doesBoxFit(box) {
    if (box.y > 765 || box.x == 0 || box.x > 405) return false;

    for (let i = 0; i < this.gridOfBoxes.length; i++) {
      if (this.gridOfBoxes[i].x == box.x) {
        return false;
      }
    }
    return true;
  }
}


class Game {
  constructor() {
    this.board = new Board();
    this.currentShape =  this.getRandShape();
    this.canvas = document.getElementsByClassName("canvas")[0];
    this.play();
  }

  getRandShape() {
    let randNr = (Math.floor(Math.random()*shapesArr.length));
    let randomShape = shapesArr[randNr][0];
    let randomColor = shapesArr[randNr][1];
    return new Shape(randomShape, 150, -90, randomColor)
  }

  play() {
   setInterval(function() {
     this.draw()
   }.bind(this), 200)
  }

  draw() {
    // be sure that we actually have a falling shape
    if(this.currentShape === undefined) return; // here you should spawn a new block!
    let currentShapeBoxesTemp = [].concat(this.currentShape.shape);


    this.currentShape.fallShape();

    for (let i = 0; i < this.currentShape.shape.length; i++) {
          if (!this.board.doesBoxFit(this.currentShape.shape[i])) {
            this.currentShape = undefined;
            this.board.addBoxes(currentShapeBoxesTemp); 
            return;
      }
    }

    let ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.currentShape.draw(ctx);
    this.board.draw(ctx)
  }

}