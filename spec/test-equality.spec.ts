import { Money } from '../src/money/money';

describe('Equality with same currency', () => {

    it('5 dollars equal to 5 dollars', () => {
        const fiveDollars1: Money = Money.dollar(5);
        const fiveDollars2: Money = Money.dollar(5);

        expect(fiveDollars1.equals(fiveDollars2)).toEqual(true);
    });

    it('5 dollars not equal to 6 dollars', () => {
        const fiveDollars: Money = Money.dollar(5);
        const sixDollars: Money = Money.dollar(6);

        expect(fiveDollars.equals(sixDollars)).toEqual(false);
    });

});

describe('Equality with different currencies', () => {

    it('5 dollars not equal to 5 francs', () => {
        const fiveDollars: Money = Money.dollar(5);
        const fiveFrancs: Money = Money.franc(5);
        expect(fiveDollars.equals(fiveFrancs)).toEqual(false);
    });

});
