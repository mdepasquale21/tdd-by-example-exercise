export abstract class Shape {

    protected readonly numberOfSides: number;

    protected constructor() {
    }

    getNumberOfSides(): number {
        return this.numberOfSides;
    }

}
