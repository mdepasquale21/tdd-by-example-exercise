import { Money } from './money';
import { Bank } from './bank';

export interface Expression {

    plus(addend: Expression): Expression;

    times(multiplier: number): Expression;

    reduce(bank: Bank, toCurrency: string): Money;

}
