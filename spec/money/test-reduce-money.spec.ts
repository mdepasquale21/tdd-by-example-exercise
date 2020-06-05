import { Bank } from '../../src/money/bank';
import { Money } from '../../src/money/money';
import { Expression } from '../../src/money/expression';

describe('Bank reduce', () => {

    it('Bank should reduce money', () => {
        const bank: Bank = new Bank();

        const result: Money = bank.reduce(Money.createMoney(1, 'USD'), 'USD');

        expect(result).toEqual(Money.createMoney(1, 'USD'));
    });

});

describe('Reduce same Currency', () => {

    it('1 dollar should be 1 dollar', () => {
        const bank: Bank = new Bank();
        const dollar: Expression = Money.createMoney(1, 'USD');

        const result: Money = bank.reduce(dollar, 'USD');

        expect(result).toEqual(Money.createMoney(1, 'USD'));
    });

    it('3 dollars should be 3 dollars', () => {
        const bank: Bank = new Bank();
        const dollar: Expression = Money.createMoney(3, 'USD');

        const result: Money = bank.reduce(dollar, 'USD');

        expect(result).toEqual(Money.createMoney(3, 'USD'));
    });

    it('conversion rate should be 1 from one currency to the same currency', () => {
        const bank: Bank = new Bank();

        expect(bank.rate('USD', 'USD')).toEqual(1);
    });

});

describe('Reduce different Currencies', () => {

    it('2 francs should be 1 dollar ', () => {
        const bank: Bank = new Bank();
        const francs2: Expression = Money.createMoney(2, 'CHF');

        bank.addRate('CHF', 'USD', 2);

        const result: Money = bank.reduce(francs2, 'USD');

        expect(result).toEqual(Money.createMoney(1, 'USD'));
    });

    it('4 francs should be 2 dollars ', () => {
        const bank: Bank = new Bank();
        const francs4: Expression = Money.createMoney(4, 'CHF');

        bank.addRate('CHF', 'USD', 2);

        const result: Money = bank.reduce(francs4, 'USD');

        expect(result).toEqual(Money.createMoney(2, 'USD'));
    });

});
