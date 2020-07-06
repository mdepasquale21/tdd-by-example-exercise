import { TriangleType } from './triangle.type';

export class Triangle {

    private readonly numberOfSides = 3;
    private readonly sides: number[];

    constructor(sides: number[]) {
        const sortedDefinedSides: number[] = this.getSortedDefined(sides);
        if (this.numberOfSides !== sortedDefinedSides.length) {
            throw Triangle.incorrectInputErrorMessage();
        }
        if (sortedDefinedSides[2] > sortedDefinedSides[0] + sortedDefinedSides[1]) {
            throw Triangle.cannotFormATriangleErrorMessage();
        }
        this.sides = sortedDefinedSides;
        console.log('Triangle formed with', this.sides)
    }

    private getSortedDefined(sides: number[]) {
        return sides
            .filter((s: number) => !!s && s > 0)
            .sort((a, b) => a - b);
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
        return this.sides[2] === this.sides[1] && this.sides[1] !== this.sides[0]
            || this.sides[1] === this.sides[0] && this.sides[1] !== this.sides[2];
    }

    public getType(): TriangleType {
        if (this.isIsosceles()) {
            return TriangleType.Isosceles;
        } else if (this.isEquilateral()) {
            return TriangleType.Equilateral;
        } else {
            return TriangleType.Scalene;
        }
    }

    public static incorrectInputErrorMessage(): string {
        return 'Error: incorrect input! Must pass 3 positive numbers';
    }

    public static cannotFormATriangleErrorMessage(): string {
        return 'Error: these 3 sides cannot form a triangle!';
    }

}
