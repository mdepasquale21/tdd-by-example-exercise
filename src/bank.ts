import { Expression } from './money/expression';
import { Money } from './money/money';

export class Bank {

    constructor() {
    }

    reduce(sourceExpression: Expression, toCurrency: string): Money {
        return sourceExpression.reduce(this, toCurrency);
    }

    rate(fromCurrency: string, toCurrency: string): number {
        return (fromCurrency === 'CHF' && toCurrency === 'USD') ? 2 : 1;
    }

}
