import { Shape } from './shape';

export class Triangle extends Shape {
    numberOfSides = 3;

    constructor(sides: number[]) {
        super(sides)
        if (sides.filter((s) => !!s).length !== this.numberOfSides) {
            throw 'Error: not a triangle!';
        }
    }

}
