const winningCombinations = [
  [0, 1, 2], //rows
  [3, 4, 5], 
  [6, 7, 8],
  [0, 3, 6], //cols
  [1, 4, 7],
  [2, 5, 8], //diagonally
  [0, 4, 8],
  [2, 4, 6]
];

class Game {
  constructor(gridSize=9) {
    this.grid = new Array(gridSize);
    this._currentPlayer = "X";
    this._gameFinished = false;
    this._winFound = false;
    this._drawFound = false;
  }

  get currentPlayer() {
    return this._currentPlayer;
  }

  set currentPlayer(mark) {
    this._currentPlayer = mark;
  }

  get gameFinished() {
    return this._gameFinished;
  }

  set gameFinished(gameState) {
    this._gameFinished = gameState;
  }

  get winFound() {
    return this._winFound;
  }

  set winFound(winState) {
    this._winFound = winState;
    return this._winFound;
  }

  get drawFound() {
    return this._drawFound;
  }

  set drawFound(drawState) {
    this._drawFound = drawState;
    return this._drawFound;
  }

  changeTurns() {
    this._currentPlayer = this._currentPlayer === "O" ? "X" : "O";
    return this._currentPlayer;
  }
}

class GameDOM {
  constructor() {
    this._curPlayer = document.getElementById("current-turn");
    this._resultMessage = document.getElementById("result-message");
    this._replayBtn = document.getElementById("replay-btn");
  }

  showPlayer(currentPlayer) {
    this._curPlayer.textContent = `${currentPlayer}'s Turn`;
  }

  showResult(message) {
    this._resultMessage.innerText = message;
  }
  
  clearPlayer() {
    this._curPlayer.textContent = "";
  }
  
  clearResult() {
    this._resultMessage.textContent = "";
  }

  showBtn() {
    this._replayBtn.style.display = 'inline';
  }

  hideBtn() {
    this._replayBtn.style.display = 'none';
  }
}

const currentGame = new Game();
const currentGameDOM = new GameDOM;

function placeMark(cell, index) {
  if (currentGame.grid[index] != null || currentGame.gameFinished == true) {
    return;
  }
  
  cell.textContent = currentGame.currentPlayer;
  currentGame.grid[index] = currentGame.currentPlayer;
  
  checkWin();
  if (currentGame.winFound) {
    return;
  }
  
  checkDraw();
  if (currentGame.drawFound) {
    return;
  }

  currentGame.changeTurns();
  currentGameDOM.showPlayer(currentGame.currentPlayer);
}

function checkWin() {
  winningCombinations.forEach((combo) => {
    let matchFound = true;
    for (let comboIndex of combo) {
      if (currentGame.grid[comboIndex] != currentGame.currentPlayer) {
        matchFound = false;
        return matchFound;
      }
    };

    if (matchFound) {
      endGame(false);
      currentGame.winFound = true;
      return;
    }
  });
}

function checkDraw() {
  for (let i = 0; i < 9; i++) {
    if (currentGame.grid[i] == null) {
      return;
    }
  }

  currentGame.drawFound = true;
  endGame(true);
}

function endGame(isDraw) {
  if (!isDraw) {
    currentGameDOM.showResult(`Winner is ${currentGame.currentPlayer}!`);
  } else {
    currentGameDOM.showResult("Result is a Draw");
  }

  currentGameDOM.showBtn();
  currentGameDOM.clearPlayer();
  currentGame.gameFinished = true;
}

function resetAll() {
  // Empty currentGame.grid
  while (currentGame.grid.length) {
    currentGame.grid.pop();
  }

  // Empty grid on page
  const cells = document.getElementsByClassName("cell");
  Array.from(cells).forEach((cell, index) => {
    cell.textContent = "";
  });

  currentGame.currentPlayer = "X";
  currentGameDOM.clearResult();
  currentGameDOM.hideBtn();
  currentGameDOM.showPlayer(currentGame.currentPlayer);
  currentGame.gameFinished = false;
}

function replay() {
  const replayBtn = document.getElementById("replay-btn");
  replayBtn.addEventListener("click", () => resetAll());
}

function playGame() {
  const cells = document.getElementsByClassName("cell");
  Array.from(cells).forEach((cell, index) => {
    cell.addEventListener("click", () => placeMark(cell, index), false);
  });
}

playGame();
replay();