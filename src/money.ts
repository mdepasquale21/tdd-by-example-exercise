export class Money {

    protected constructor(protected amount: number,
                          protected moneyCurrency: string) {
    }

    static dollar(amount: number) {
        return new Money(amount, 'USD');
    }

    static franc(amount: number) {
        return new Money(amount, 'CHF');
    }

    times(multiplier: number): Money {
        return new Money(this.amount * multiplier, this.moneyCurrency);
    }

    plus(addend: Money) {
        return new Money(this.amount + addend.amount, this.moneyCurrency);
    }

    currency(): string {
        return this.moneyCurrency;
    }

    equals(money: Money): boolean {
        return this.amount === money.amount && this.currency() === money.currency();
    }

    toString(): string {
        return this.amount + ' ' + this.moneyCurrency;
    }

}
