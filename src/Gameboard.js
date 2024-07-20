import { Ship } from "./ship";

class Cell {
    constructor(cordinates, clicked = false, ID = null) {
        this.cordinates = cordinates;
        this.clicked = clicked;
        this.ID = ID;
    }
}

export class Board {
    constructor() {
        this.board = this.createBoard();
        this.ships = [
            new Ship(5, 5),
            new Ship(4, 4),
            new Ship(3, 3),
            new Ship(3, 33),
            new Ship(2, 2),
            new Ship(2, 22),
        ];
        this.targets = [];
    }

    createBoard() {
        let board = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                board.push(new Cell([i, j]));
            }
        }
        return board;
    }

    placeShip(position, length, direction, id) {
        let baseCell = this.board.find(cell => cell.cordinates[0] === position[0] && cell.cordinates[1] === position[1]);
        let startIndex = this.board.indexOf(baseCell);
        let pathResult = this.checkCells(startIndex, length, direction, id);

        if (pathResult !== true) {
            pathResult[0].forEach(index => this.add(this.board[index], id));
            this.addBordersForShip(pathResult[0], id);
            return pathResult;
        }
        return false;
    }

    checkCells(startIndex, length, direction, id) {
        const path = [];

        for (let i = 0; i < length; i++) {
            if (direction === 'horzntl') {
                let cell = this.board[startIndex + i];
                if (!cell || cell.ID !== null || cell.cordinates[1] + length > 10) return true;
                path.push(startIndex + i);
            } else if (direction === 'vrtcl') {
                let cell = this.board[startIndex + (i * 10)];
                if (!cell || cell.ID !== null || cell.cordinates[0] + length > 10) return true;
                path.push(startIndex + (i * 10));
            }
        }

        return path.length === length ? [path] : true;
    }

    addBordersForShip(shipCells, id) {
        const ship = this.ships.find(ship => ship.ID == id)
        const borders = [];
        shipCells.forEach(index => {
            const cell = this.board[index];
            this.addBorders(borders, cell.cordinates);
        });

        const uniqueBorders = Array.from(new Set(borders)).filter(index => !shipCells.includes(index));
        uniqueBorders.forEach(index => {
            let cell = this.board[index];
            if (cell.ID === null) {
                cell.ID = 0;
            }
        });

        ship.borders = uniqueBorders
    }

    addBorders(borders, cordinates) {
        const [x, y] = cordinates;

        const adjacentCells = [
            [x - 1, y - 1], [x - 1, y], [x - 1, y + 1],
            [x, y - 1], [x, y + 1],
            [x + 1, y - 1], [x + 1, y], [x + 1, y + 1]
        ];

        adjacentCells.forEach(([adjX, adjY]) => {
            if (adjX >= 0 && adjX < 10 && adjY >= 0 && adjY < 10) {
                let adjCell = this.board.find(cell => cell.cordinates[0] === adjX && cell.cordinates[1] === adjY);
                if (adjCell) {
                    borders.push(this.board.indexOf(adjCell));
                }
            }
        });
    }

    add(cell, value) {
        if (cell && cell.ID === null) {
            cell.ID = value;
        }
    }

    randomize() {
        this.ships.forEach(ship => {
            let placed = false;
            while (!placed) {
                let randomIndex = Math.floor(Math.random() * 100);
                let randomCell = this.board[randomIndex];
                let direction = Math.random() < 0.5 ? 'horzntl' : 'vrtcl';
                placed = this.placeShip(randomCell.cordinates, ship.length, direction, ship.ID);
                if (placed) ship.start = placed[0];
            }
        });
    }

    receiveAttack(cell) {
        if (cell.clicked) return false;
        console.log(cell.clicked)
        cell.clicked = true;
        console.log(cell.clicked)


        if (cell.ID !== null) {
            let hitShip = this.ships.find(ship => ship.ID === cell.ID);
            if (hitShip) {
                hitShip.hit();
                this.addSurroundingCellsToTargets(cell)
                if (hitShip.sunk()) {
                    this.targets = [];
                    hitShip.borders.forEach(border => {
                        this.board[border].clicked = true

                    })
                    return { hit: true, sunk: true, ship: hitShip };
                }

                return { hit: true, sunk: false, ship: hitShip };
            }
        }

        return { hit: false, sunk: false, ship: null };
    }

    addSurroundingCellsToTargets(cell) {
        const [x, y] = cell.cordinates;
        const surroundingCells = [
            [x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]
        ];

        surroundingCells.forEach(([adjX, adjY]) => {
            if (adjX >= 0 && adjX < 10 && adjY >= 0 && adjY < 10) {
                const adjCell = this.board.find(cell => cell.cordinates[0] === adjX && cell.cordinates[1] === adjY);
                if (adjCell && !adjCell.clicked && adjCell.ID !== 0) {
                    this.targets.push(adjCell);
                }
            }
        });
    }

    botAttack() {
        let targetCell;
        let randomIndex
        if (this.targets.length > 0) {
            targetCell = this.targets.shift();
        } else {
            do {
                randomIndex = Math.floor(Math.random() * 100);
                targetCell = this.board[randomIndex]
                console.log(targetCell)
            } while (!targetCell || targetCell.clicked);
        }

        return targetCell;
    }
    allSunk() {
        return this.ships.every(ship => ship.sunk());
    }

    restart() {
        for (let i = 0; i < this.board.length; i++) {
            this.board[i].ID = null;
            this.board[i].clicked = false;
        }
        this.targets = []
    }
}

export const GameBoard = new Board();
export const BotBoard = new Board();

console.log(GameBoard)
