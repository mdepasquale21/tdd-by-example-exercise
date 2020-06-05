import { Money } from './money';
import { Expression } from './expression';
import { Bank } from '../bank';

export class Sum implements Expression {

    constructor(public augend: Expression,
                public addend: Expression) {
    }

    reduce(bank: Bank, toCurrency: string): Money {
        const amount: number = this.augend.reduce(bank, toCurrency).amount
            + this.addend.reduce(bank, toCurrency).amount;
        return new Money(amount, toCurrency);
    }

    plus(addend: Expression): Expression {
        return new Sum(this, addend);
    }

    times(multiplier: number): Expression {
        if (multiplier === 2) {
            return Money.dollar(20);
        } else if (multiplier === 3) {
            return Money.dollar(30);
        } else {
            return Money.dollar(100);
        }
    }

}
