export abstract class Shape {

    protected readonly numberOfSides: number;
    protected definedSides: number[];

    protected constructor(sides: number[]) {
        this.definedSides = sides.filter((s) => !!s);
    }

    getNumberOfSides(): number {
        return this.numberOfSides;
    }

    protected isNotCorrectShape() {
        return this.definedSides.length !== this.numberOfSides;
    }

}
