import { Money } from '../src/money';
import { Expression } from '../src/expression';
import { Bank } from '../src/bank';

describe('Addition', () => {

    it('5 dollars + 5 dollars is 10 dollars', () => {
        const five: Money = Money.dollar(5);
        const sum: Expression = five.plus(five);

        const bank: Bank = new Bank();
        const reduced: Money = bank.reduce(sum, 'USD');

        expect(reduced).toEqual(Money.dollar(10));
    });

});
