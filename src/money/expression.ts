import { Money } from './money';
import { Bank } from '../bank';

export interface Expression {
    augend;
    addend;

    reduce(bank: Bank, toCurrency: string): Money;

    times(multiplier: number): Expression;

    plus(addend: Expression): Expression;

    equals(other: Expression): boolean;

    currency(): string;
}
