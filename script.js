
var canvas = document.getElementsByClassName("canvas")[0];
var ctx = canvas.getContext("2d");
ctx.scale(1, 1);

// Grid
var grid = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
]

var gridMod = grid;
//=====End Grid=====


let currentShape = {
  
  shape: d,
  x: 0,
  y: 0,
  draw: function() {
    for(let i = x; i < this.shape[0].length + x; i++) {
      for(let j = y; j < this.shape[1].length + y; j++) {
        if(this.shape[i][j]=== 1) ctx.fillRect(this.x, this.y, 45, 45)
      }
    }
  },
  transpose : function() {

  }
}


function drawShape(shape, x, y){
  for(let i = x; i < shape[0].length + x; i++) {
    for(let j = y; j < shape[1].length + y; j++) {
      grid[i][j] = 1
    }
  }
} 

drawShape(d, 1,0)
// shapes
var d = [[1]];

var b = [[1,1],
        [1,1]]

var j = [[0,0,0],
        [1,0,0],
        [1,1,1]]

var l = [[0,0,0],
        [0,0,1],
        [1,1,1]]

var i = [[0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [1,1,1,1]]

var t = [[0,0,0],
        [0,1,0],
        [1,1,1]]

var s = [[0,1,1],
        [1,1,0],
        [0,0,0]]

var z = [[1,1,0],
        [0,1,1],
        [0,0,0]]

        var shapesArr = ["d","b","j","l","i","t","s","z"];
//=====End Shapes=====

// CLASS
class TetrisGame {

  constructor() {
    this.grid = grid;
    this.gridMod = gridMod;
    this.intervalId = "";
  }

  // Random type
  randType() {
    var randNr = (Math.floor(Math.random()*7));
    return shapesArr[randNr];
  }

  // New Block
  newBlock() {
    this.gridMod = this.grid;
    var shapeGot = this.randType();

    switch (shapeGot) {
      case "d":
        this.gridMod[0][5] = 1;
        ctx.fillStyle = 'blue';
        break;
      case "b":
        this.gridMod[0][4] = 1;
        this.gridMod[0][5] = 1;
        this.gridMod[1][4] = 1;
        this.gridMod[1][5] = 1;
        ctx.fillStyle = 'green';
        break;
      case "j":
        this.gridMod[0][4] = 1;
        this.gridMod[1][4] = 1;
        this.gridMod[1][5] = 1;
        this.gridMod[1][6] = 1;
        ctx.fillStyle = 'red';
        break;
      case "l":
        this.gridMod[0][6] = 1;
        this.gridMod[1][4] = 1;
        this.gridMod[1][5] = 1;
        this.gridMod[1][6] = 1;
        ctx.fillStyle = 'purple';
        break;
      case "i":
        this.gridMod[0][3] = 1;
        this.gridMod[0][4] = 1;
        this.gridMod[0][5] = 1;
        this.gridMod[0][6] = 1;
        ctx.fillStyle = 'orange';
        break;
      case "t":
        this.gridMod[0][5] = 1;
        this.gridMod[1][4] = 1;
        this.gridMod[1][5] = 1;
        this.gridMod[1][6] = 1;
        ctx.fillStyle = 'pink';
        break;
      case "s":
        this.gridMod[0][5] = 1;
        this.gridMod[0][6] = 1;
        this.gridMod[1][4] = 1;
        this.gridMod[1][5] = 1;
        ctx.fillStyle = 'yellow';
        break;
      case "z":
        this.gridMod[0][4] = 1;
        this.gridMod[0][5] = 1;
        this.gridMod[1][5] = 1;
        this.gridMod[1][6] = 1;
        ctx.fillStyle = 'brown';
        break;
    }
  }
  //=====End new Block=====

  // Draw
  updateCanvas() {

    var y = 0;
    var x = 0;
  
    for (let i = 0; i < this.gridMod.length; i++) {
      y = y + (45 * i);
  
      for (let j = 0; j < this.gridMod[i].length; j++) {
        x = x + (45 * j)
  
        if (this.gridMod[i][j] === 1) {
          ctx.fillRect(x, y, 45 ,45);
  
        }
        x = 0;
      }
      y=0;
    }  
  }
  //=====End Draw=====

  //Falling Anmimation
  animateFalling(){

    this.intervalId = setInterval(function() { 
    
      for (let i = this.gridMod.length-1; i > 0; i--) {
        for (let j = 0; j < this.gridMod[i].length; j++) {

          if (this.gridMod[i-1][j] === 1) {
            this.gridMod[i][j] = this.gridMod[i-1][j];
            this.gridMod[i-1][j] = 0;
          }
        }
      } 

      this.updateCanvas();
    }.bind(this), 1000);
  }
  //=====End Falling Animation=====
}
//=====END CLASS=====










//   // Draw
//   draw() {

//     var y = 0;
//     var x = 0;
  
//     for (let i = 0; i < this.gridMod.length; i++) {
//       y = y + (45 * i);
  
//       for (let j = 0; j < this.gridMod[i].length; j++) {
//         x = x + (45 * j)
  
//         if (this.gridMod[i][j] === 1) {
//           ctx.fillRect(x, y, 45 ,45);
  
//         }
//         x = 0;
//       }
//       y=0;
//     }  
//   }

//   drawBlock(x, y, color) {
//     ctx.fillStyle = color;
//     y = (45 * y);
//     x = (45 * x)
//     ctx.fillRect(y, x, 45 ,45);
//   }
//   //=====End Draw=====

//   //Falling Anmimation
//   animateFalling(){

//     this.intervalId = setInterval(function() { 
    
//       for (let i = this.gridMod.length-1; i > 0; i--) {
//         for (let j = 0; j < this.gridMod[i].length; j++) {

//           if (this.gridMod[i-1][j] === 1) {
//             this.gridMod[i][j] = this.gridMod[i-1][j];
//             this.gridMod[i-1][j] = 0;
//             this.drawBlock(i-1, j, "white")
//             // this.gridMod[i-1][j] = 0;
//           }
//         }
//       } 

//       this.draw();
//     }.bind(this), 1000);
//   }
//   //=====End Falling Animation=====
// }
// //=====END CLASS=====

