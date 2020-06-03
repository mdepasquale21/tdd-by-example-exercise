import { Expression } from './expression';
import { Money } from './money';

export class Bank {

    constructor() {
    }

    reduce(sourceExpression: Expression, toCurrency: string): Money {
        return sourceExpression.reduce(toCurrency);
    }

    addRate(currency1: string, currency2: string, conversionRate: number) {

    }

}
