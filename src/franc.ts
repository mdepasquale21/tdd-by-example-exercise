export class Franc {
    constructor(private amount: number) {
    }

    public times(multiplier: number): Franc {
        return new Franc(this.amount * multiplier);
    }

    public equals(franc: Franc): boolean {
        return this.amount === franc.amount;
    }

}
