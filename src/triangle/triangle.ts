import { Shape } from './shape';

export class Triangle extends Shape {
    numberOfSides = 3;

    constructor(sides: number[]) {
        super(sides)
        if (this.isNotCorrectShape()) {
            throw 'Error: incorrect shape!';
        }
    }

}
