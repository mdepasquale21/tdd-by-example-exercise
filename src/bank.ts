import { Expression } from './money/expression';
import { Money } from './money/money';
import { Pair } from './pair';

export class Bank {
    private rates: Map<Pair, number> = new Map<Pair, number>();

    constructor() {
    }

    reduce(sourceExpression: Expression, toCurrency: string): Money {
        return sourceExpression.reduce(this, toCurrency);
    }

    rate(fromCurrency: string, toCurrency: string): number {
        if (fromCurrency === toCurrency) {
            return 1;
        } else {
            const pair: Pair = new Pair(fromCurrency, toCurrency);
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            console.log(this.rates.get(pair))
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            return this.rates.get(pair);
        }
    }

    addRate(fromCurrency: string, toCurrency: string, conversionRate: number) {
        const pair: Pair = new Pair(fromCurrency, toCurrency);
        this.rates.set(pair, conversionRate);
    }

}
