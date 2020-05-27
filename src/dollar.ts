export class Dollar {
    constructor(public amount: number) {
    }

    public times(multiplier: number): void {
        this.amount *= multiplier;
    }

}
