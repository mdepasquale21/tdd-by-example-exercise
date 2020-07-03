import { TriangleType } from './triangle.type';

export class Triangle {

    private readonly rightNumberOfSides = 3;
    private definedSides: number[];

    constructor(sides: number[]) {
        this.setDefinedSides(sides);
        if (this.incorrectInput()) {
            throw 'Error: incorrect input! Must pass 3 positive numbers';
        }
        if (this.cannotForm()) {
            throw 'Error: these 3 sides cannot form a triangle!';
        }
    }

    private setDefinedSides(sides: number[]) {
        this.definedSides = sides.filter((s: number) => !!s && s >= 0);
    }

    private incorrectInput() {
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

    public getType(): TriangleType {
        if (this.isEquilateral()) {
            return TriangleType.Equilateral;
        } else if (this.isIsosceles()) {
            return TriangleType.Isosceles;
        } else {
            return TriangleType.Scalene;
        }
    }

    private isEquilateral(): boolean {
        for (let i = 0; i < this.definedSides.length - 1; i++) {
            if(this.definedSides[i] !== this.definedSides[i+1]) {
                return false;
            }
        }
        return true;
    }

    private isIsosceles(): boolean {
        return false;
    }

}
