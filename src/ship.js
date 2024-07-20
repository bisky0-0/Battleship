export class Ship {
    constructor(length, ID, borders) {
        this.length = length;
        this.hits = 0;
        this.ID = ID;
        this.borders = borders
    }

    hit() {
        this.hits++;
    }

    sunk() {
        return this.hits === this.length;
    }
}
