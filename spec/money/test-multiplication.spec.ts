import { Money } from '../../src/money/money';
import { Expression } from '../../src/money/expression';

describe('Multiplication of money', () => {
    let five: Expression;

    beforeEach(() => {
        five = Money.createMoney(5, 'USD');
    });

    it('5 dollars times 2 is 10 dollars', () => {
        expect(five.times(2)).toEqual(Money.createMoney(10, 'USD'));
    });

    it('5 dollars times 3 is 15 dollars', () => {
        expect(five.times(3)).toEqual(Money.createMoney(15, 'USD'));
    });

});
