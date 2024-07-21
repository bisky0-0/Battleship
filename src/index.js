import './DOM.js';
import { gridChildren, displayShips, updateCell, markBorders, displayShipInBotBard, winner } from './DOM.js';
import { BotBoard, GameBoard } from './Gameboard.js';

let userTurn = true;
let started = false;

export async function setupGame() {
    await gridChildren(document.getElementById('human-grid'), 'human');
    GameBoard.randomize();
    displayShips(GameBoard.ships, document.getElementsByClassName('human-cell'));

    await gridChildren(document.getElementById('bot-grid'), 'bot');
    BotBoard.randomize();

    const cells = document.getElementById('bot-grid').children;
    const sound = document.getElementById('shot-sound');
    const over = document.getElementById('over-sound')

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function () {
            started = true
            if (!userTurn) return;

            if (!cells[i].classList.contains('shot') && !cells[i].classList.contains('fail') && !cells[i].classList.contains('borders')) {
                sound.play();
                let result = BotBoard.receiveAttack(BotBoard.board[i], 'bot');
                updateCell(BotBoard.board[i], 'bot', result.hit);

                if (result.sunk) {
                    displayShipInBotBard(result.ship)
                    markBorders(result.ship, 'bot');
                }

                if (BotBoard.allSunk()) {
                    over.play()
                    setTimeout(() => winner('you'), 1000);
                    return started = false;
                }

                userTurn = false;

                setTimeout(() => {
                    sound.play();
                    let cell = GameBoard.botAttack();
                    let result = GameBoard.receiveAttack(cell, 'human');
                    updateCell(cell, 'human', result.hit);

                    if (result.sunk) {
                        markBorders(result.ship, 'human');
                    }

                    if (GameBoard.allSunk()) {
                        over.play()
                        setTimeout(() => winner('bot'), 1000);
                        return started = false;
                    } else {
                        userTurn = true;
                    }
                }, 700);
            }
        });
    }
}

export function resetGame() {
    const humanGrid = document.getElementById('human-grid');
    const botGrid = document.getElementById('bot-grid');

    while (humanGrid.firstChild) {
        humanGrid.removeChild(humanGrid.firstChild);
    }
    while (botGrid.firstChild) {
        botGrid.removeChild(botGrid.firstChild);
    }

    clearClasses(humanGrid);
    clearClasses(botGrid);

    GameBoard.board = GameBoard.createBoard();
    BotBoard.board = BotBoard.createBoard();

    GameBoard.ships.forEach(ship => {
        ship.hits = 0;
        ship.start = [];
        ship.borders = [];
    });
    BotBoard.ships.forEach(ship => {
        ship.hits = 0;
        ship.start = [];
        ship.borders = [];
    });

    userTurn = true;
    started = false;
}

function clearClasses(grid) {
    const cells = grid.children;
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('shot', 'fail', 'borders');
    }
}

function reRandomise() {
    if (!started) {
        GameBoard.restart();
        GameBoard.randomize();
        const board = document.getElementById('human-grid');
        const cells = board.children;
        for (let i = 0; i < cells.length; i++) {
            console.log(cells[i].hasChildNodes() ? cells[i].firstChild : 'doesnt')
            cells[i].hasChildNodes() ? cells[i].removeChild(cells[i].firstChild) : null;
            while (cells[i].classList.length > 0) {
                cells[i].classList.remove(cells[i].classList.item(0));
            }

            cells[i].classList.add('cell', `human-cell`)
        }
        displayShips(GameBoard.ships, board.children);
    }
    else {
        document.getElementById('randomise').style.cursor = 'not-allowed'
    }
}

setupGame();

document.getElementById('randomise').addEventListener('click', () => reRandomise())


document.getElementById('play').addEventListener('click', () => {
    resetGame();
    setupGame()
})

