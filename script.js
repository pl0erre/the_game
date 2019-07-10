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
    this.x = x,
    this.y = y,
    this.color = color,
    this.shape = this.generateShape(this.currentShape.length)
  }

  generateShape() {
    let boxes = [];
    for(let i = 0; i < this.currentShape.length; i++) {
      for(let j = 0; j < this.currentShape[i].length; j++) {

        if(this.currentShape[i][j] == 1) {
          boxes.push(new Box(this.x + j * boxSize, this.y + i * boxSize, boxSize, this.color));
        }
      }
    }
    return boxes;
  }

  draw(ctx) {

    this.shape = this.generateShape();
    this.shape.forEach(box => ctx.fillRect(box.x, box.y, box.size, box.size))
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
