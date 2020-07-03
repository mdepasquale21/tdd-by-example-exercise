import { Shape } from './shape';

export class Triangle extends Shape {

    numberOfSides = 3;

    constructor(private side1: number,
                private side2: number,
                private side3: number) {
        super()
    }

}
