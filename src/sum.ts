import { Money } from './money';
import { Expression } from './expression';

export class Sum implements Expression {

    constructor(public augend: Money,
                public addend: Money) {
    }

    reduce(toCurrency: string): Money {
        const amount: number = this.augend.amount + this.addend.amount;
        return new Money(amount, toCurrency);
    }

}
