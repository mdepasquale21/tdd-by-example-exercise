import { Expression } from '../../src/money/expression';
import { Money } from '../../src/money/money';
import { Bank } from '../../src/money/bank';
import { Sum } from '../../src/money/sum';

describe('A sum plus money', () => {

    it('(5 dollars + 10 francs) + 5 dollars should be 15 dollars ', () => {
        const fiveDollars: Expression = Money.createMoney(5, 'USD');
        const tenFrancs: Expression = Money.createMoney(10, 'CHF');

        const bank: Bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const sum: Expression = new Sum(fiveDollars, tenFrancs).plus(fiveDollars);

        const result: Money = bank.reduce(sum, 'USD');

        expect(result).toEqual(Money.createMoney(15, 'USD'));
    });

});
