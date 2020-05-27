export class Dollar {
    constructor(private amount: number) {
    }

    public times(multiplier: number): Dollar {
        return new Dollar(this.amount * multiplier);
    }

    public equals(dollar: Dollar): boolean {
        return this.amount === dollar.amount;
    }

}
