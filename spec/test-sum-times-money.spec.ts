import { Expression } from '../src/money/expression';
import { Money } from '../src/money/money';
import { Bank } from '../src/bank';
import { Sum } from '../src/money/sum';

describe('A sum times money', () => {

    it('(5 dollars + 10 francs) x 2 should be 20 dollars ', () => {
        const fiveDollars: Expression = Money.dollar(5);
        const tenFrancs: Expression = Money.franc(10);

        const bank: Bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const sum: Expression = new Sum(fiveDollars, tenFrancs).times(2);

        const result: Money = bank.reduce(sum, 'USD');

        expect(result).toEqual(Money.dollar(20));
    });

    it('(5 dollars + 10 francs) x 3 should be 30 dollars ', () => {
        const fiveDollars: Expression = Money.dollar(5);
        const tenFrancs: Expression = Money.franc(10);

        const bank: Bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const sum: Expression = new Sum(fiveDollars, tenFrancs).times(3);

        const result: Money = bank.reduce(sum, 'USD');

        expect(result).toEqual(Money.dollar(30));
    });

    it('(10 dollars + 20 francs) x 5 should be 100 dollars ', () => {
        const tenDollars: Expression = Money.dollar(10);
        const twentyFrancs: Expression = Money.franc(20);

        const bank: Bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const sum: Expression = new Sum(tenDollars, twentyFrancs).times(5);

        const result: Money = bank.reduce(sum, 'USD');

        expect(result).toEqual(Money.dollar(100));
    });

});
