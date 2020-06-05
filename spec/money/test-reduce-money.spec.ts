import { Bank } from '../../src/money/bank';
import { Money } from '../../src/money/money';
import { Expression } from '../../src/money/expression';
import { Currency } from '../../src/money/currency';

describe('Bank reduce', () => {

    it('Bank should reduce money', () => {
        const bank: Bank = new Bank();

        const result: Money = bank.reduce(Money.createMoney(1, Currency.Dollar), Currency.Dollar);

        expect(result).toEqual(Money.createMoney(1, Currency.Dollar));
    });

});

describe('Reduce same Currency', () => {

    it('1 dollar should be 1 dollar', () => {
        const bank: Bank = new Bank();
        const dollar: Expression = Money.createMoney(1, Currency.Dollar);

        const result: Money = bank.reduce(dollar, Currency.Dollar);

        expect(result).toEqual(Money.createMoney(1, Currency.Dollar));
    });

    it('3 dollars should be 3 dollars', () => {
        const bank: Bank = new Bank();
        const dollar: Expression = Money.createMoney(3, Currency.Dollar);

        const result: Money = bank.reduce(dollar, Currency.Dollar);

        expect(result).toEqual(Money.createMoney(3, Currency.Dollar));
    });

    it('conversion rate should be 1 from one currency to the same currency', () => {
        const bank: Bank = new Bank();

        expect(bank.rate(Currency.Dollar, Currency.Dollar)).toEqual(1);
    });

});

describe('Reduce different Currencies', () => {

    it('2 francs should be 1 dollar ', () => {
        const bank: Bank = new Bank();
        const francs2: Expression = Money.createMoney(2, Currency.Franc);

        bank.addRate(Currency.Franc, Currency.Dollar, 2);

        const result: Money = bank.reduce(francs2, Currency.Dollar);

        expect(result).toEqual(Money.createMoney(1, Currency.Dollar));
    });

    it('4 francs should be 2 dollars ', () => {
        const bank: Bank = new Bank();
        const francs4: Expression = Money.createMoney(4, Currency.Franc);

        bank.addRate(Currency.Franc, Currency.Dollar, 2);

        const result: Money = bank.reduce(francs4, Currency.Dollar);

        expect(result).toEqual(Money.createMoney(2, Currency.Dollar));
    });

});
