import { Money } from './money';

export interface Expression {
    reduce(toCurrency: string): Money;
}
