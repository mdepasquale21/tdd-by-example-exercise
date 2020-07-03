export abstract class Shape {

    protected readonly numberOfSides: number;

    protected constructor(protected sides: number[]) {
        this.numberOfSides = sides.length;
    }

    getNumberOfSides(): number {
        return this.numberOfSides;
    }

    getSides(): number[] {
        return this.sides;
    }

}
