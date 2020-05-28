import { Dollar } from './dollar';
import { Franc } from './franc';

export abstract class Money {
    protected constructor(protected amount: number) {
    }

    static dollar(amount: number) {
        return new Dollar(amount)
    }

    static franc(amount: number) {
        return new Franc(amount)
    }

    abstract times(multiplier: number)

    abstract getClass(): string

    public equals(money: Money): boolean {
        return this.amount === money.amount && this.getClass() === money.getClass();
    }

}
