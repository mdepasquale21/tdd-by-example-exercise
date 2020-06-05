import { Money } from '../src/money/money';
import { Expression } from '../src/money/expression';
import { Bank } from '../src/bank';
import { Sum } from '../src/money/sum';

describe('Addition', () => {

    it('plus returns a sum', () => {
        const five: Expression = Money.dollar(5);
        const sum: Expression = five.plus(five);

        expect(five).toEqual(sum.augend)
        expect(five).toEqual(sum.addend);
    });

    it('5 dollars + 5 dollars is 10 dollars', () => {
        const five: Expression = Money.dollar(5);
        const sum: Expression = five.plus(five);

        const bank: Bank = new Bank();

        const reduced: Money = bank.reduce(sum, 'USD');

        expect(reduced).toEqual(Money.dollar(10));
    });

    it('if all addends have same currency and the target has same currency' +
        ' should return a money with amount the sum of the single amounts:' +
        ' 3 dollars + 4 dollars = 7 dollars', () => {
        const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
        const bank: Bank = new Bank();

        const result: Money = bank.reduce(sum, 'USD');

        expect(result).toEqual(Money.dollar(7))
    });

});
