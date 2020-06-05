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

});
