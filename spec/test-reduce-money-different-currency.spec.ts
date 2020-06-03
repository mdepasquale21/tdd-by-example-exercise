import { Bank } from '../src/bank';
import { Money } from '../src/money/money';

describe('Reduce different Currencies', () => {

    it('2 francs should be 1 dollar ', () => {
        const bank: Bank = new Bank();
        const francs2: Money = Money.franc(2);

        const result: Money = bank.reduce(francs2, 'USD');

        expect(result).toEqual(Money.dollar(1));
    });

    it('4 francs should be 2 dollar ', () => {
        const bank: Bank = new Bank();
        const francs4: Money = Money.franc(4);

        const result: Money = bank.reduce(francs4, 'USD');

        expect(result).toEqual(Money.dollar(2));
    });

});
