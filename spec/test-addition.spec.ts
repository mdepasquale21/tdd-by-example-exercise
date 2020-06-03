import { Money } from '../src/money';
import { Expression } from '../src/expression';
import { Bank } from '../src/bank';
import { Sum } from '../src/sum';

describe('Addition', () => {

    it('plus returns a sum', () => {
        const five: Money = Money.dollar(5);
        const result: Expression = five.plus(five);

        const sum: Sum = <Sum>result

        expect(five).toEqual(sum.augend)
        expect(five).toEqual(sum.addend);
    });

    it('5 dollars + 5 dollars is 10 dollars', () => {
        const five: Money = Money.dollar(5);
        const sum: Expression = five.plus(five);

        const bank: Bank = new Bank();
        const reduced: Money = bank.reduce(sum, 'USD');

        expect(reduced).toEqual(Money.dollar(10));
    });

});
