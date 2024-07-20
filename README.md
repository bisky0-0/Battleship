# Battleship Game

Welcome to the Battleship Game! This project is a classic implementation of the Battleship game using JavaScript, HTML, and CSS. It features both human and bot players, randomized ship placements, and an interactive game board.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Game Rules](#game-rules)
- [Testing](#testing)
- [License](#license)

## Features

- Interactive game board for both human and bot players
- Randomized ship placement
- Real-time updates for hits, misses, and sunken ships
- Animated background and shots
- Play again functionality to reset the game

## Technologies Used

- JavaScript (ES6+)
- HTML5
- CSS3 (SCSS)
- Jest (for testing)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/battleship-game.git
   ```

2. Navigate to the project directory:

   ```bash
   cd battleship-game
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Game Rules

1. The game board consists of a 10x10 grid for both players.
2. Each player has a fleet of ships of varying lengths.
3. Ships can be placed either horizontally or vertically.
4. Players take turns to select a cell on the opponent's grid to attack.
5. A hit is marked with an 'X', and a miss is marked with a dot.
6. The game continues until all the ships of one player are sunk.

## Testing

This project uses Jest for testing. To run the tests, use the following command:

    ```bash
    npm test Gameboard.test.js
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
