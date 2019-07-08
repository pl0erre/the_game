



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

