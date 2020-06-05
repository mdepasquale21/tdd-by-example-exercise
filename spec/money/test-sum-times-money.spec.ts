import { Expression } from '../../src/money/expression';
import { Money } from '../../src/money/money';
import { Bank } from '../../src/money/bank';
import { Sum } from '../../src/money/sum';
import { Currency } from '../../src/money/currency';

describe('A sum times money', () => {

    it('(5 dollars + 10 francs) x 2 should be 20 dollars ', () => {
        const fiveDollars: Expression = Money.createMoney(5, Currency.Dollar);
        const tenFrancs: Expression = Money.createMoney(10, Currency.Franc);

        const bank: Bank = new Bank();
        bank.addRate(Currency.Franc, Currency.Dollar, 2);
        const sum: Expression = new Sum(fiveDollars, tenFrancs).times(2);

        const result: Money = bank.reduce(sum, Currency.Dollar);

        expect(result).toEqual(Money.createMoney(20, Currency.Dollar));
    });

    it('(5 dollars + 10 francs) x 3 should be 30 dollars ', () => {
        const fiveDollars: Expression = Money.createMoney(5, Currency.Dollar);
        const tenFrancs: Expression = Money.createMoney(10, Currency.Franc);

        const bank: Bank = new Bank();
        bank.addRate(Currency.Franc, Currency.Dollar, 2);
        const sum: Expression = new Sum(fiveDollars, tenFrancs).times(3);

        const result: Money = bank.reduce(sum, Currency.Dollar);

        expect(result).toEqual(Money.createMoney(30, Currency.Dollar));
    });

    it('(10 dollars + 20 francs) x 5 should be 100 dollars ', () => {
        const tenDollars: Expression = Money.createMoney(10, Currency.Dollar);
        const twentyFrancs: Expression = Money.createMoney(20, Currency.Franc);

        const bank: Bank = new Bank();
        bank.addRate(Currency.Franc, Currency.Dollar, 2);
        const sum: Expression = new Sum(tenDollars, twentyFrancs).times(5);

        const result: Money = bank.reduce(sum, Currency.Dollar);

        expect(result).toEqual(Money.createMoney(100, Currency.Dollar));
    });

    it('(10 dollars + 20 francs) x 10 should be 200 dollars ', () => {
        const tenDollars: Expression = Money.createMoney(10, Currency.Dollar);
        const twentyFrancs: Expression = Money.createMoney(20, Currency.Franc);

        const bank: Bank = new Bank();
        bank.addRate(Currency.Franc, Currency.Dollar, 2);
        const sum: Expression = new Sum(tenDollars, twentyFrancs).times(10);

        const result: Money = bank.reduce(sum, Currency.Dollar);

        expect(result).toEqual(Money.createMoney(200, Currency.Dollar));
    });

});
