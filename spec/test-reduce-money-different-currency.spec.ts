import { Bank } from '../src/bank';
import { Money } from '../src/money/money';

describe('Reduce different Currencies', () => {

    it('2 francs should be 1 dollar ', () => {
        const bank: Bank = new Bank();
        const francs2: Money = Money.franc(2);

        bank.addRate('CHF', 'USD', 2);

        console.log(francs2)
        console.log(bank)
        const result: Money = bank.reduce(francs2, 'USD');

        expect(result).toEqual(Money.dollar(1));
    });

    it('4 francs should be 2 dollar ', () => {
        const bank: Bank = new Bank();
        const francs4: Money = Money.franc(4);

        bank.addRate('CHF', 'USD', 2);
        console.log(francs4)
        console.log(bank)
        const result: Money = bank.reduce(francs4, 'USD');

        expect(result).toEqual(Money.dollar(2));
    });

    it('1 dollar should be 1 dollar', () => {
        const bank: Bank = new Bank();
        const dollar: Money = Money.dollar(1);

        const result: Money = bank.reduce(dollar, 'USD');

        expect(result).toEqual(Money.dollar(1));
    });

});
