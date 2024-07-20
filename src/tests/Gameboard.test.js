import { GameBoard } from "../Gameboard";

test('board', () => {
    expect(GameBoard.board.length).toBe(100);

    expect(GameBoard.placeShip([0, 0], 3, 'horzntl', 3)).toEqual([[0, 1, 2]]);
    expect(GameBoard.placeShip([1, 4], 3, 'horzntl', 33)).toEqual([[14, 15, 16]]);
    expect(GameBoard.placeShip([4, 4], 2, 'vrtcl', 2)).toEqual([[44, 54]]);
    expect(GameBoard.placeShip([5, 5], 2, 'vrtcl', 22)).toBe(false);
    expect(GameBoard.placeShip([0, 0], 1, 'vrtcl', 1)).toBe(false);


    expect(GameBoard.allSunk()).toBe(false);
});
