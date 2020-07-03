export abstract class Shape {

    protected readonly rightNumberOfSides: number;
    protected definedSides: number[];

    protected constructor(sides: number[]) {
        this.setDefinedSides(sides);
    }

    private setDefinedSides(sides: number[]) {
        this.definedSides = sides.filter((s: number) => !!s);
    }

    getRightNumberOfSides(): number {
        return this.rightNumberOfSides;
    }

    protected isWrongShape() {
        return this.getRightNumberOfSides() !== this.definedSides.length;
    }

    protected abstract cannotForm(): boolean;

}
