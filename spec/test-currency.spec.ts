import { Money } from '../src/money';

describe('Currency', () => {

    it('US Dollars (USD) ', () => {
        expect(Money.dollar(5).currency()).toEqual('USD');
    });

    it('Swiss Francs (CHF) ', () => {
        expect(Money.franc(5).currency()).toEqual('CHF');
    });

});
