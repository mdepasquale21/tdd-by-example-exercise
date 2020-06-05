import { Expression } from '../../src/money/expression';
import { Money } from '../../src/money/money';
import { Bank } from '../../src/money/bank';
import { Sum } from '../../src/money/sum';

describe('A sum times money', () => {

    it('(5 dollars + 10 francs) x 2 should be 20 dollars ', () => {
        const fiveDollars: Expression = Money.createMoney(5, 'USD');
        const tenFrancs: Expression = Money.createMoney(10, 'CHF');

        const bank: Bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const sum: Expression = new Sum(fiveDollars, tenFrancs).times(2);

        const result: Money = bank.reduce(sum, 'USD');

        expect(result).toEqual(Money.createMoney(20, 'USD'));
    });

    it('(5 dollars + 10 francs) x 3 should be 30 dollars ', () => {
        const fiveDollars: Expression = Money.createMoney(5, 'USD');
        const tenFrancs: Expression = Money.createMoney(10, 'CHF');

        const bank: Bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const sum: Expression = new Sum(fiveDollars, tenFrancs).times(3);

        const result: Money = bank.reduce(sum, 'USD');

        expect(result).toEqual(Money.createMoney(30, 'USD'));
    });

    it('(10 dollars + 20 francs) x 5 should be 100 dollars ', () => {
        const tenDollars: Expression = Money.createMoney(10, 'USD');
        const twentyFrancs: Expression = Money.createMoney(20, 'CHF');

        const bank: Bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const sum: Expression = new Sum(tenDollars, twentyFrancs).times(5);

        const result: Money = bank.reduce(sum, 'USD');

        expect(result).toEqual(Money.createMoney(100, 'USD'));
    });

    it('(10 dollars + 20 francs) x 10 should be 200 dollars ', () => {
        const tenDollars: Expression = Money.createMoney(10, 'USD');
        const twentyFrancs: Expression = Money.createMoney(20, 'CHF');

        const bank: Bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const sum: Expression = new Sum(tenDollars, twentyFrancs).times(10);

        const result: Money = bank.reduce(sum, 'USD');

        expect(result).toEqual(Money.createMoney(200, 'USD'));
    });

});
