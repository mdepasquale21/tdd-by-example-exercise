import { Expression } from './expression';
import { Sum } from './sum';
import { Bank } from './bank';

export class Money implements Expression {

    private constructor(private amount: number,
                        private currency: string) {
    }

    static createMoney(amount: number, currency: string): Money {
        return new Money(amount, currency);
    }

    getAmount(): number {
        return this.amount;
    }

    getCurrency(): string {
        return this.currency;
    }

    equals(money: Money): boolean {
        return this.amount === money.amount && this.getCurrency() === money.getCurrency();
    }

    plus(addend: Expression): Expression {
        return new Sum(this, addend);
    }

    times(multiplier: number): Expression {
        return new Money(this.amount * multiplier, this.currency);
    }

    reduce(bank: Bank, toCurrency: string): Money {
        const rate: number = bank.rate(this.getCurrency(), toCurrency);
        return new Money(this.amount / rate, toCurrency);
    }

}
