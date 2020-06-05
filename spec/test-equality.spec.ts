import { Money } from '../src/money/money';
import { Expression } from '../src/money/expression';

describe('Equality with same currency', () => {

    it('5 dollars equal to 5 dollars', () => {
        const fiveDollars1: Expression = Money.dollar(5);
        const fiveDollars2: Expression = Money.dollar(5);
        expect(fiveDollars1.equals(fiveDollars2)).toEqual(true);
    });

    it('5 dollars not equal to 6 dollars', () => {
        const fiveDollars: Expression = Money.dollar(5);
        const sixDollars: Expression = Money.dollar(6);
        expect(fiveDollars.equals(sixDollars)).toEqual(false);
    });

});

describe('Equality with different currencies', () => {

    it('5 dollars not equal to 5 francs', () => {
        const fiveDollars: Expression = Money.dollar(5);
        const fiveFrancs: Expression = Money.franc(5);
        expect(fiveDollars.equals(fiveFrancs)).toEqual(false);
    });

});
