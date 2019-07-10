



// // Random type
// function randType() {

//   let randNr = (Math.floor(Math.random()*7));
//   return shapesArr[randNr];
// }
// //=====End Random Type=====


// // New Block
// function newBlock() {

//     gridMod = grid;
//     var shapeGot = randType();

//     switch (shapeGot) {
//       case "d":
//         gridMod[0][5] = 1;
//         ctx.fillStyle = 'blue';
//         break;
//       case "b":
//         gridMod[0][4] = 1;
//         gridMod[0][5] = 1;
//         gridMod[1][4] = 1;
//         gridMod[1][5] = 1;
//         ctx.fillStyle = 'green';
//         break;
//       case "j":
//         gridMod[0][4] = 1;
//         gridMod[1][4] = 1;
//         gridMod[1][5] = 1;
//         gridMod[1][6] = 1;
//         ctx.fillStyle = 'red';
//         break;
//       case "l":
//         gridMod[0][6] = 1;
//         gridMod[1][4] = 1;
//         gridMod[1][5] = 1;
//         gridMod[1][6] = 1;
//         ctx.fillStyle = 'purple';
//         break;
//       case "i":
//         gridMod[0][3] = 1;
//         gridMod[0][4] = 1;
//         gridMod[0][5] = 1;
//         gridMod[0][6] = 1;
//         ctx.fillStyle = 'orange';
//         break;
//       case "t":
//         gridMod[0][5] = 1;
//         gridMod[1][4] = 1;
//         gridMod[1][5] = 1;
//         gridMod[1][6] = 1;
//         ctx.fillStyle = 'pink';
//         break;
//       case "s":
//         gridMod[0][5] = 1;
//         gridMod[0][6] = 1;
//         gridMod[1][4] = 1;
//         gridMod[1][5] = 1;
//         ctx.fillStyle = 'yellow';
//         break;
//       case "z":
//         gridMod[0][4] = 1;
//         gridMod[0][5] = 1;
//         gridMod[1][5] = 1;
//         gridMod[1][6] = 1;
//         ctx.fillStyle = 'brown';
//         break;
//     }
//   }
//   //=====End new Block=====

  
//   // Draw
// function draw() {

//   var y = 0;
//   var x = 0;

//   for (let i = 0; i < gridMod.length; i++) {
//     y = y + (45 * i);

//     for (let j = 0; j < gridMod[i].length; j++) {
//       x = x + (45 * j)

//       if (gridMod[i][j] === 1) {
//         ctx.fillRect(x+3, y+3, 45 ,45);

//       }
//       x = 3;
//     }
//     y=0;
//   }  
// }
//=====End Draw Canvas=====










//   //=====End new Block=====

//   // Draw
//   updateCanvas() {

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
//   //=====End Draw=====

//   //Falling Anmimation
//   animateFalling(){

//     this.intervalId = setInterval(function() { 
    
//       for (let i = this.gridMod.length-1; i > 0; i--) {
//         for (let j = 0; j < this.gridMod[i].length; j++) {

//           if (this.gridMod[i-1][j] === 1) {
//             this.gridMod[i][j] = this.gridMod[i-1][j];
//             this.gridMod[i-1][j] = 0;
//           }
//         }
//       } 
//       /* Currently its looping over the grid and updating every singlr  */

//       this.updateCanvas();
//     }.bind(this), 1000);
//   }
//   //=====End Falling Animation=====
// }
// //=====END CLASS=====










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





  
  // displayBox() {

  //     ctx.fillStyle = this.color;
  //     ctx.fillRect(this.x, this.y, this.size, this.size);
      
  //   }
    