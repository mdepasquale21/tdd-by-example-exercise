import { Shape } from './shape';

export class Triangle extends Shape {
    rightNumberOfSides = 3;

    constructor(sides: number[]) {
        super(sides)
        if (this.isWrongShape()) {
            throw 'Error: incorrect shape!';
        }
        // if (this.cannotForm()) {
        //     throw 'Error: these 3 sides cannot form a triangle!';
        // }
    }

    cannotForm(): boolean {
        return this.definedSides[0] >= this.definedSides[1] + this.definedSides[2] ||
            this.definedSides[1] >= this.definedSides[0] + this.definedSides[2] ||
            this.definedSides[2] >= this.definedSides[0] + this.definedSides[1]
    }

}
