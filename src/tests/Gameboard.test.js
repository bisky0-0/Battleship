import { GameBoard, BotBoard, Board } from "../Gameboard";
import { Ship } from "../ship";

describe('GameBoard Methods', () => {
    beforeEach(() => {
        // Reset the game board before each test
        GameBoard.board = GameBoard.createBoard();
        BotBoard.board = BotBoard.createBoard();

        // Reset ships
        GameBoard.ships = [
            new Ship(4, 4),
            new Ship(3, 3),
            new Ship(3, 33),
            new Ship(2, 2),
            new Ship(2, 22),
            new Ship(1, 11),
            new Ship(1, 12)
        ];
        BotBoard.ships = [
            new Ship(4, 4),
            new Ship(3, 3),
            new Ship(3, 33),
            new Ship(2, 2),
            new Ship(2, 22),
            new Ship(1, 11),
            new Ship(1, 12)
        ];
    });

    test('createBoard', () => {
        expect(GameBoard.board.length).toBe(100);
        expect(GameBoard.board[0]).toHaveProperty('cordinates', [0, 0]);
        expect(GameBoard.board[99]).toHaveProperty('cordinates', [9, 9]);
    });

    test('placeShip', () => {
        expect(GameBoard.placeShip([0, 0], 3, 'horzntl', 3)).toEqual([[0, 1, 2]]);
        expect(GameBoard.placeShip([1, 4], 3, 'horzntl', 33)).toEqual([[14, 15, 16]]);
        expect(GameBoard.placeShip([4, 4], 2, 'vrtcl', 2)).toEqual([[44, 54]]);
        expect(GameBoard.placeShip([5, 5], 2, 'vrtcl', 22)).toBe(false);
        expect(GameBoard.placeShip([0, 0], 1, 'vrtcl', 1)).toBe(false);
    });

    test('checkCells', () => {
        expect(GameBoard.checkCells(0, 3, 'horzntl')).toEqual([[0, 1, 2]]);
        expect(GameBoard.checkCells(0, 3, 'vrtcl')).toEqual([[0, 10, 20]]);
        expect(GameBoard.checkCells(9, 3, 'horzntl')).toBe(true);  // Overflow horizontally
        expect(GameBoard.checkCells(90, 3, 'vrtcl')).toBe(true);  // Overflow vertically
    });

    test('addBordersForShip', () => {
        const path = GameBoard.placeShip([0, 0], 3, 'horzntl', 3)[0];
        GameBoard.addBordersForShip(path, 3);
        const borders = GameBoard.ships.find(ship => ship.ID === 3).borders;
        expect(borders.length).toBeGreaterThan(0);
    });

    test('add', () => {
        let cell = GameBoard.board[0];
        GameBoard.add(cell, 99);
        expect(cell.ID).toBe(99);
    });

    test('randomize', () => {
        GameBoard.randomize();
        let placedShips = GameBoard.ships.filter(ship => ship.start.length > 0);
        expect(placedShips.length).toBe(GameBoard.ships.length);
    });

    test('receiveAttack', () => {
        GameBoard.placeShip([0, 0], 3, 'horzntl', 3);
        let cell = GameBoard.board[0];
        GameBoard.receiveAttack(cell, 'human');
        expect(cell.clicked).toBe(true);
        expect(cell.ID).toBe(3);
    });


    test('allSunk', () => {
        GameBoard.placeShip([0, 0], 1, 'horzntl', 11);
        GameBoard.board[0].ID = 11;
        GameBoard.board[0].clicked = true;
        GameBoard.ships.find(ship => ship.ID === 11).hits = 1;
        expect(GameBoard.allSunk()).toBe(false);

        GameBoard.ships.forEach(ship => {
            ship.hits = ship.length;
        });
        expect(GameBoard.allSunk()).toBe(true);
    });
});
