import { Money } from './money';

export class Franc extends Money {

    constructor(amount: number, currency: string) {
        super(amount, currency)
    }

    public times(multiplier: number): Money {
        return Money.franc(this.amount * multiplier)
    }

    public getClass(): string {
        return 'Franc';
    }

    public currency(): string {
        return this.moneyCurrency;
    }

}
