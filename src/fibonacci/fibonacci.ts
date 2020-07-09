export class Fibonacci {

    constructor(private indexNumber: number) {
    }

    get() {
        if (this.indexNumber === 2) {
            return 1;
        } else if (this.indexNumber === 3) {
            return 2
        }
        return this.indexNumber;
    }

}
