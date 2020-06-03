import { Expression } from './expression';
import { Sum } from './sum';

export class Money implements Expression {

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

    plus(addend: Money): Expression {
        return new Sum(this, addend);
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
