const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('up', 'move up', this.cursor.up);
    Screen.addCommand('down', 'move down', this.cursor.down);
    Screen.addCommand('left', 'move left', this.cursor.left);
    Screen.addCommand('right', 'move right', this.cursor.right);

    Screen.render();
  }

  // *********

  static turn() {
    Screen.render();
    Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);

    this.playerTurn == "O" ? this.playerTurn = "X" : this.playerTurn = "O";

    const winner = TTT.checkWin(Screen.grid);

    !winner ? Screen.render() : TTT.endGame(winner);
  }

  static flipGrid(grid) {
    let newGrid = [];
    for (const col in grid) { // iterate through the column of the grid
      let flipped = grid.map(row => row[col]); // iterate through column element
      newGrid.push(flipped);
    }
    return newGrid;
  }
  /*******************************************************************************
    flipGrid() to check for vertical wins horizontally
    [['X', ' ', ' '],        [['X', 'X', 'X'],
     ['X', ' ', ' '], ==>     [' ', ' ', ' '],
     ['X', ' ', ' ']]         [' ', ' ', ' ']]
    
  *******************************************************************************/

  static checkWin(grid) {
    const mirroredGrid = TTT.flipGrid(grid);

    let players = ["X", "O"];
    // use a for loop to check both players
    for (const player in players) {
      for (const row in grid) { // check for horizontal winner
        if (grid[row].every(el => el == players[player])) {
          return players[player];
        }
      }

      for (const col in mirroredGrid) { // check vertical winner
        if (mirroredGrid[col].every(el => el == players[player])) {
          return players[player];
        }
      }

      // check for diagnal winner
      if (
        (grid[0][0] == players[player]) &&
        (grid[0][0] == grid[1][1]) &&
        (grid[1][1] == grid[2][2])
      ) return players[player];
      else if (
        (grid[0][2] == players[player]) &&
        (grid[0][2] == grid[1][1]) &&
        (grid[1][1] == grid[2][0])
      ) return players[player];
    }
    if (grid.every(row => row.every(v => v != ' '))) return "T";
    else return false;
  }





  // ********?

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}


let grid = [[' ', ' ', ' '],
[' ', ' ', ' '],
[' ', ' ', ' ']]

console.log(TTT.checkWin(grid)) // false

module.exports = TTT;
