import { Money } from '../../src/money/money';
import { Bank } from '../../src/money/bank';
import { Expression } from '../../src/money/expression';

describe('Addition of mixed currencies', () => {

    it('5 dollars + 10 francs is 10 dollars if CHFtoUSD rate is 2', () => {
        const fiveDollars: Expression = Money.dollar(5);
        const tenFrancs: Expression = Money.franc(10);

        const bank: Bank = new Bank();
        bank.addRate('CHF', 'USD', 2);

        const result: Money = bank.reduce(fiveDollars.plus(tenFrancs), 'USD');

        expect(result).toEqual(Money.dollar(10));
    });

});
