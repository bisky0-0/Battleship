export class Player {
    constructor(id) {
        this.id = id;
        this.turn = false;
    }

    randomShot(game, func) {
        let cell = false;
        let attempts = 0;
        while (!cell && attempts < 100) {
            let randomCell = game.board[Math.floor(Math.random() * 100)];
            if (!randomCell.clicked) cell = func(randomCell);
            attempts++;
        }
        return cell;
    }
}
