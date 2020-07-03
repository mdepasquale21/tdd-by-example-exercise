import { Shape } from './shape';

export class Triangle extends Shape {
    rightNumberOfSides = 3;

    constructor(sides: number[]) {
        super(sides)
        if (this.isWrongShape()) {
            throw 'Error: incorrect shape!';
        }
        if (this.cannotForm()) {
            throw 'Error: these 3 sides cannot form a triangle!';
        }
    }

    cannotForm(): boolean {
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

}
