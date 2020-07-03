export abstract class Shape {

    protected readonly numberOfSides: number;

    protected constructor(protected sides: number[]) {
    }

    getNumberOfSides(): number {
        return this.numberOfSides;
    }

}
