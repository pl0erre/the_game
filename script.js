const timer = 500;
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
        [shape_z, "#A40B0Bn"]];

// ==============================================================================

class Box {
  constructor(x, y, size, color) {
    this.x = x,
    this.y = y,
    this.size = size,
    this.color = color,
    this.shape = ""
  }
  
  displayBox() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size)
  }
  
}


class Shape {
  constructor(vanillaShape= [[]], x, y, color) {
    this.vanillaShape = vanillaShape,
    this.x = x,
    this.y = y,
    this.color = color,
    this.shape = this.generateShape(this.vanillaShape.length)
    this.shapeRotated = [[]]

  }

  generateShape() {
    let boxes = [];
    for(let i = 0; i < this.vanillaShape.length; i++) {
      for(let j = 0; j < this.vanillaShape[i].length; j++) {

        if(this.vanillaShape[i][j] == 1) {
          boxes.push(new Box(this.x + j * boxSize, this.y + i * boxSize, boxSize, this.color));
        }
      }
    }
    return boxes;
  }

  draw(ctx) {
    // ctx.fillStyle(this.color);
    this.shape.forEach(box => ctx.fillRect(box.x, box.y, box.size, box.size))
  }

  rotateShape() {
  }
}















// Jurgen
// let currentShape = {
  
//   shape: shape,
//   x: 0,
//   y: 0,
//   draw: function() {
//     for(let i = x; i < this.shape[0].length + x; i++) {
//       for(let j = y; j < this.shape[1].length + y; j++) {
//         if(this.shape[i][j]=== 1) ctx.fillRect(this.x, this.y, 45, 45)
//       }
//     }
//   },
//   transpose : function() {

//   }
// }


// function drawShape(shape, x, y) {

//   for(let i = x; i < shape[0].length + x; i++) {
//     for(let j = y; j < shape[1].length + y; j++) {
//       grid[i][j] = 1
//     }
//   }
// } 

// drawShape(d, 1,0)
