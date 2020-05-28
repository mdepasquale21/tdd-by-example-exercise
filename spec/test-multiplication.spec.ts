import { Money } from '../src/money';

describe('Dollar Multiplication', () => {
    let five: Money;

    beforeEach(() => {
        five = Money.dollar(5);
    });

    it('5 dollars times 2 is 10 dollars', () => {
        expect(five.times(2)).toEqual(Money.dollar(10));

    });

    it('5 dollars times 3 is 15 dollars', () => {
        expect(five.times(3)).toEqual(Money.dollar(15));
    });

});

describe('Franc Multiplication', () => {
    let five: Money;

    beforeEach(() => {
        five = Money.franc(5);
    });

    it('5 francs times 2 is 10 francs', () => {
        expect(five.times(2)).toEqual(Money.franc(10));

    });

    it('5 francs times 3 is 15 francs', () => {
        expect(five.times(3)).toEqual(Money.franc(15));
    });

});
