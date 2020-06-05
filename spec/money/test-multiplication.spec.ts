import { Money } from '../../src/money/money';
import { Expression } from '../../src/money/expression';
import { Currency } from '../../src/money/currency';

describe('Multiplication of money', () => {
    let five: Expression;

    beforeEach(() => {
        five = Money.createMoney(5, Currency.Dollar);
    });

    it('5 dollars times 2 is 10 dollars', () => {
        expect(five.times(2)).toEqual(Money.createMoney(10, Currency.Dollar));
    });

    it('5 dollars times 3 is 15 dollars', () => {
        expect(five.times(3)).toEqual(Money.createMoney(15, Currency.Dollar));
    });

});
