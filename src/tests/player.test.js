import { Board } from "../Gameboard";
import { Player } from "../player";

test('player', () => {
    let player = new Player(1);
    let game = new Board();
    expect(player.id).toBe(1);
    expect(player.randomShot(game, game.receiveAttack)).toBe(true);
});
