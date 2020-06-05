import { Money } from '../../src/money/money';
import { Currency } from '../../src/money/currency';

describe('Currency', () => {

    it('US Dollars (USD) ', () => {
        expect(Money.createMoney(5, Currency.Dollar).getCurrency()).toEqual(Currency.Dollar);
    });

    it('Swiss Francs (CHF) ', () => {
        expect(Money.createMoney(5, Currency.Franc).getCurrency()).toEqual(Currency.Franc);
    });

});
