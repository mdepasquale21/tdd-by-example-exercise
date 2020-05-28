import { Money } from '../src/money';

describe('Addition', () => {

    it('5 dollars + 5 dollars is 10 dollars', () => {
        const sum = Money.dollar(5).plus(Money.dollar(5));
        expect(sum).toEqual(Money.dollar(10));
    });

});
