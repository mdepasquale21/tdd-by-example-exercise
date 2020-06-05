import { Money } from '../../src/money/money';
import { Bank } from '../../src/money/bank';
import { Expression } from '../../src/money/expression';
import { Currency } from '../../src/money/currency';

describe('Addition of mixed Currency', () => {

    it('5 dollars + 10 francs is 10 dollars if CHFtoUSD rate is 2', () => {
        const fiveDollars: Expression = Money.createMoney(5, Currency.Dollar);
        const tenFrancs: Expression = Money.createMoney(10, Currency.Franc);

        const bank: Bank = new Bank();
        bank.addRate(Currency.Franc, Currency.Dollar, 2);

        const result: Money = bank.reduce(fiveDollars.plus(tenFrancs), Currency.Dollar);

        expect(result).toEqual(Money.createMoney(10, Currency.Dollar));
    });

});
