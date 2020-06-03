import { Expression } from './money/expression';
import { Money } from './money/money';
import { Pair } from './pair';

export class Bank {
    private rates: Map<string, number> = new Map<string, number>();

    constructor() {
    }

    reduce(sourceExpression: Expression, toCurrency: string): Money {
        return sourceExpression.reduce(this, toCurrency);
    }

    rate(fromCurrency: string, toCurrency: string): number {
        if (fromCurrency === toCurrency) {
            return 1;
        } else {
            const pairingStringKey: string = new Pair(fromCurrency, toCurrency).getPairingStringKey();
            return this.rates.get(pairingStringKey);
        }
    }

    addRate(fromCurrency: string, toCurrency: string, conversionRate: number) {
        const pairingStringKey: string = new Pair(fromCurrency, toCurrency).getPairingStringKey();
        this.rates.set(pairingStringKey, conversionRate);
    }

}
