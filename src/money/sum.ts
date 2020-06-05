import { Money } from './money';
import { Expression } from './expression';
import { Bank } from '../bank';

export class Sum implements Expression {

    constructor(public augend: Expression,
                public addend: Expression) {
    }

    currency(): string {
        throw new Error('Method not implemented.');
    }

    equals(other: Expression): boolean {
        throw new Error('Method not implemented.');
    }

    reduce(bank: Bank, toCurrency: string): Money {
        const amount: number = this.augend.reduce(bank, toCurrency).amount
            + this.addend.reduce(bank, toCurrency).amount;
        return new Money(amount, toCurrency);
    }

    plus(addend: Expression): Expression {
        return undefined;
    }

    times(multiplier: number): Expression {
        return undefined;
    }

}
