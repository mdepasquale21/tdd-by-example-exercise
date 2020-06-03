import { Expression } from './expression';
import { Sum } from './sum';
import { Bank } from './bank';

export class Money implements Expression {

    // todo protected!!
    constructor(public amount: number,
                public moneyCurrency: string) {
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

    reduce(bank: Bank, toCurrency: string): Money {
        const rate: number = bank.rate(this.currency(), toCurrency);
        return new Money(this.amount / rate, toCurrency);
    }

}
