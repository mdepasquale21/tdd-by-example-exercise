import { Dollar } from './dollar';
import { Franc } from './franc';

export abstract class Money {

    protected constructor(protected amount: number,
                          protected moneyCurrency: string) {
    }

    static dollar(amount: number) {
        return new Dollar(amount, 'USD')
    }

    static franc(amount: number) {
        return new Franc(amount, 'CHF')
    }

    abstract times(multiplier: number)

    abstract getClass(): string

    public currency(): string {
        return this.moneyCurrency;
    }

    public equals(money: Money): boolean {
        return this.amount === money.amount && this.getClass() === money.getClass();
    }

}
