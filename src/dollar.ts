import { Money } from './money';

export class Dollar extends Money {

    constructor(amount: number, currency: string) {
        super(amount, currency)
    }

    public times(multiplier: number): Money {
        return Money.dollar(this.amount * multiplier);
    }

    public getClass(): string {
        return 'Dollar';
    }

    public currency(): string {
        return this.moneyCurrency;
    }

}
