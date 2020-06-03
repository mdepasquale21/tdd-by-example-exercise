import { Money } from './money';
import { Bank } from '../bank';

export interface Expression {
    reduce(bank: Bank, toCurrency: string): Money;
}
