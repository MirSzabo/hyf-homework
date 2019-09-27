//Game of life
/*rules
1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.*/

/* simplified as 
1. 0--- exactly 3 alive neighbours ---->1 
2. 1--- less than 2 alive or more than 3 alive ---->0
*/

/*pseudo code
- create 2 dimensional array[x][y]
- fill array with 1 and 0
- draw the array
- implement the rules of Game 
- what to do with the edges
*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

const resolution = 10;
canvas.width = 1000;
canvas.height = 700;

const cols = canvas.width / resolution;
const rows = canvas.height / resolution; 

let grid = [];

requestAnimationFrame(update);
function update() {
  grid = newGrid(grid);
  draw(grid);
  requestAnimationFrame(update);
}

//create the 2D array
function make2DArray(cols, rows) {
  let arr = [];
  for (let i = 0; i < cols; i++) {
    arr[i] = [];
    for (let j = 0; j < rows; j++) {
      arr[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return arr;
}

grid = make2DArray(cols, rows);
console.table(grid);

//draw the 2D array
function draw(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cell = grid[i][j];
      const x = i * resolution;
      const y = j * resolution;

      ctx.beginPath();
      ctx.rect(x, y, resolution, resolution);
      ctx.fillStyle = cell ? "black" : "white";
      ctx.fill();
      ctx.stroke();
    }
  }
}
draw(grid);

//implement the rules of Game 
function newGrid(grid) {
  //copy of the grid by value!!!
  let next = JSON.parse(JSON.stringify(grid));
  //console.log(grid === next);//false

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // edges are the same value
      if (i === 0 || i === cols - 1 || j === 0 || j === rows - 1) {
        next[i][j] = grid[i][j];
      } else {
        //count live neighbours
        let neighbours = countNeighbours(grid, i, j);
        //rules of the game
        let state = grid[i][j];
        if (state === 0 && neighbours === 3) {
          next[i][j] = 1;
        } else if (state === 1 && (neighbours < 2 || neighbours > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }
  }
  return next;
}

function countNeighbours(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      sum += grid[x + i][y + j];
    }
  }
  sum -= grid[x][y]; //we dont want to check this position
  return sum;
}
