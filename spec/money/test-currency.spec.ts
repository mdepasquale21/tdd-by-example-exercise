import { Money } from '../../src/money/money';

describe('Currency', () => {

    it('US Dollars (USD) ', () => {
        expect(Money.createMoney(5, 'USD').getCurrency()).toEqual('USD');
    });

    it('Swiss Francs (CHF) ', () => {
        expect(Money.createMoney(5, 'CHF').getCurrency()).toEqual('CHF');
    });

});
