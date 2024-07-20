import { BotBoard } from './Gameboard';
import { resetGame, setupGame } from '.';
import './sass/main.scss';

const shipsPics = [
    "./assets/carrier.svg",
    "./assets/destroyer.svg",
    "./assets/submarine.svg",
    "./assets/submarine.svg",
    "./assets/patrol.svg",
    "./assets/patrol.svg"
]

export async function gridChildren(parent, player) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell', `${player}-cell`);
            cell.dataset.x = i;
            cell.dataset.y = j;
            parent.appendChild(cell);
        }
    }
}

function setAttrs(elem, attrs, values) {
    for (let i = 0; i < attrs.length; i++) {
        elem.setAttribute(attrs[i], values[i]);
    }
}

export function displayShips(ships, boardCells) {
    for (let i = 0; i < ships.length; i++) {
        const shipElem = document.createElement('img');
        shipElem.src = shipsPics[i]
        boardCells[ships[i].start[0]].appendChild(shipElem);
        setAttrs(shipElem, ['class', 'draggable', 'id'], ['ship', 'true', `ship-${ships[i].ID}`]);

        if (ships[i].start[1] - ships[i].start[0] === 10) {
            shipElem.classList.add(`ship-${ships[i].ID}-rotate`);
        }
    };
}

export function displayShipInBotBard(ship) {
    const shipElement = document.createElement('img');
    ship.length === 5 ? shipElement.src = shipsPics[0] :
        ship.length === 4 ? shipElement.src = shipsPics[1] :
            ship.length === 3 ? shipElement.src = shipsPics[2] :
                shipElement.src = shipsPics[4];
    const board = document.getElementById('bot-grid');
    const boardCells = board.children
    boardCells[ship.start[0]].appendChild(shipElement);
    setAttrs(shipElement, ['class', 'draggable', 'id'], ['ship', 'true', `ship-${ship.ID}-bot`]);

    if (ship.start[1] - ship.start[0] === 10) {
        shipElement.classList.add(`ship-${ship.ID}-bot-rotate`);
    }
}

export function updateCell(cell, player, hit) {
    let domCell = document.querySelector(`#${player}-grid .${player}-cell[data-x="${cell.cordinates[0]}"][data-y="${cell.cordinates[1]}"]`);
    if (hit) {
        domCell.classList.add('shot');
    } else {
        domCell.classList.add('fail');
    }
}

export function markBorders(ship, player) {
    const grid = document.getElementById(`${player}-grid`);
    ship.borders.forEach(border => {
        const borderCell = grid.children[border]
        console.log(border, borderCell)
        borderCell.classList.add('borders');
    });
}

export function winner(winner) {
    const card = document.getElementById('winner-card');
    const h1 = document.getElementById('winner-h1');
    const btn = document.getElementById('winner-card-btn');

    card.classList.add('winner-card-visible')

    h1.textContent = `${winner} won!`;

    btn.addEventListener('click', () => {
        resetGame();
        setupGame();
        document.getElementById('winner-card').classList.remove('winner-card-visible')
    })
}

