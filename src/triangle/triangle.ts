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
        let boolArray: boolean[] = [];
        for (let i = 0; i < this.definedSides.length; i++) {
            const cloneDefinedSides = this.definedSides.slice();
            cloneDefinedSides.splice(i, 1);
            console.log(cloneDefinedSides)
            console.log(this.definedSides)
            boolArray.push(cloneDefinedSides.reduce((a, b) => a + b) > this.definedSides[i]);
        }
        console.log(boolArray)
        return boolArray.some((el) => !el);
        // return this.definedSides[0] >= this.definedSides[1] + this.definedSides[2] ||
        //     this.definedSides[1] >= this.definedSides[0] + this.definedSides[2] ||
        //     this.definedSides[2] >= this.definedSides[0] + this.definedSides[1]
    }

}
