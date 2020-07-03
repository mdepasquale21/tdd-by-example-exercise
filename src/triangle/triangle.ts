export class Triangle {

    private readonly rightNumberOfSides = 3;
    private definedSides: number[];

    constructor(sides: number[]) {
        this.setDefinedSides(sides);
        if (this.isWrongShape()) {
            throw 'Error: incorrect shape!';
        }
        if (this.cannotForm()) {
            throw 'Error: these 3 sides cannot form a triangle!';
        }
    }

    private setDefinedSides(sides: number[]) {
        this.definedSides = sides.filter((s: number) => !!s);
    }

    private isWrongShape() {
        return this.getRightNumberOfSides() !== this.definedSides.length;
    }

    private cannotForm(): boolean {
        let canFormTriangleArray: boolean[] = [];
        for (let i = 0; i < this.definedSides.length; i++) {
            const cloneDefinedSides = this.definedSides.slice();
            cloneDefinedSides.splice(i, 1);
            canFormTriangleArray.push(this.isSideLessThanSumOfOtherSides(cloneDefinedSides, i));
        }
        return canFormTriangleArray.some((el) => !el);
    }

    private isSideLessThanSumOfOtherSides(cloneDefinedSides: number[], i: number) {
        return cloneDefinedSides.reduce((a, b) => a + b) > this.definedSides[i];
    }

    public getRightNumberOfSides(): number {
        return this.rightNumberOfSides;
    }

}
