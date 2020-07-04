import { TriangleType } from './triangle.type';

export class Triangle {

    private readonly numberOfSides = 3;
    private sides: number[];

    constructor(sides: number[]) {
        this.setSides(sides);
        if (this.incorrectInput()) {
            throw 'Error: incorrect input! Must pass 3 positive numbers';
        }
        if (this.cannotForm()) {
            throw 'Error: these 3 sides cannot form a triangle!';
        }
        console.log('Triangle formed with', this.sides)
    }

    private setSides(sides: number[]) {
        this.sides = sides
            .filter((s: number) => !!s && s > 0)
            .sort((a, b) => a - b);
    }

    private incorrectInput() {
        return this.getNumberOfSides() !== this.sides.length;
    }

    private cannotForm(): boolean {
        return this.sides[2] > this.sides[0] + this.sides[1];
    }

    public getNumberOfSides(): number {
        return this.numberOfSides;
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
        for (let i = 0; i < this.sides.length - 1; i++) {
            if (this.sides[i] !== this.sides[i + 1]) {
                return false;
            }
        }
        return true;
    }

    private isIsosceles(): boolean {
        return this.sides[2] === this.sides[1] || this.sides[1] === this.sides[0];
    }

}
