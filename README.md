# Tic Tac Toe 
This is a simple implementation of a 3x3 Grid Tic Tac Toe game using HTML, CSS, and JavaScript, following Object-Oriented Programming (OOP) principles.

## Play the Game
https://outstanding-shoe-ox.cyclic.cloud/

## Code Structure
The code is organized into two classes: `Game` and `GameDOM`. The `Game` class manages the game state and logic, while the `GameDOM` class handles the DOM manipulation and display of game elements.

### `Game` Class

- `grid`: Represents the game grid as an array.
- `currentPlayer`: Tracks the current player (X or O).
- `gameFinished`: Indicates if the game has ended.
- `winFound`: Indicates if a winning combination has been found.
- `drawFound`: Indicates if the game ends in a draw.
- `changeTurns()`: Switches the current player after each turn.

### `GameDOM` Class

- `curPlayer`: Stores the reference to the current player element.
- `resultMessage`: Stores the reference to the result message element.
- `replayBtn`: Stores the reference to the replay button element.
- `showPlayer(currentPlayer)`: Updates the current player element with the current player's turn.
- `showResult(message)`: Displays the result message on the page.
- `clearPlayer()`: Clears the current player element.
- `clearResult()`: Clears the result message element.
- `showBtn()`: Shows the replay button.
- `hideBtn()`: Hides the replay button.

### Functions

- `placeMark(cell, index)`: Handles placing the player's mark on the grid and checking for win or draw conditions.
- `checkWin()`: Checks for a winning combination on the grid.
- `checkDraw()`: Checks if the game ends in a draw.
- `endGame(isDraw)`: Handles the game end logic and displays the appropriate result message.
- `resetAll()`: Resets the game to its initial state.
- `replay()`: Adds a click event listener to the replay button.
- `playGame()`: Adds click event listeners to the grid cells to place marks.

## HTML Structure

The HTML file contains the basic structure of the game. It consists of a grid with nine cells, a heading, a current player element, a result message element, and a replay button.

## CSS Styles

The CSS file provides simple styling for the game elements. The grid cells are styled as squares, and the replay button is initially hidden until the game ends.
