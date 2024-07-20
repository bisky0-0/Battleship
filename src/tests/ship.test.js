import { Ship } from "../ship";

test('ship is sunk', () => {
    let ship = {
        length: 2,
        ID: 2,
        hits: 0,
        hit() {
            return this.hits++;
        },
        sunk() {
            return this.length === this.hits;
        }
    };
    ship.hit();
    ship.hit();
    expect(ship.length).toBe(2);
    expect(ship.sunk()).toBe(true);
});

test('ship', () => {
    let ship = new Ship(3);
    ship.hit();
    console.log(ship.hits);
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(1);
    expect(ship.sunk()).toBe(false);
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(3);
    expect(ship.sunk()).toBe(true);
});
