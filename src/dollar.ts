export class Dollar {
    constructor(public amount: number) {
    }

    public times(multiplier: number): Dollar {
        return new Dollar(this.amount * multiplier)
    }

}
