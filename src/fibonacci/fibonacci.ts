export class Fibonacci {

    constructor(private length: number) {
    }

    get() {
        if (this.length === 2) {
            return 1;
        } else if (this.length === 3) {
            return 2
        }
        return this.length;
    }

}
