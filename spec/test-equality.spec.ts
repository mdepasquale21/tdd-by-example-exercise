import { Money } from '../src/money';

describe('Dollar Equality', () => {

    it('5 dollars equal to 5 dollars', () => {
        const fiveDollars1 = Money.dollar(5);
        const fiveDollars2 = Money.dollar(5);
        expect(fiveDollars1.equals(fiveDollars2)).toEqual(true);
    });

    it('5 dollars not equal to 6 dollars', () => {
        const fiveDollars = Money.dollar(5);
        const sixDollars = Money.dollar(6);
        expect(fiveDollars.equals(sixDollars)).toEqual(false);
    });

});

describe('Franc Equality', () => {

    it('5 francs equal to 5 francs', () => {
        const fiveFrancs1 = Money.franc(5);
        const fiveFrancs2 = Money.franc(5);
        expect(fiveFrancs1.equals(fiveFrancs2)).toEqual(true);
    });

    it('5 francs not equal to 6 francs', () => {
        const fiveFrancs = Money.franc(5);
        const sixFrancs = Money.franc(6);
        expect(fiveFrancs.equals(sixFrancs)).toEqual(false);
    });

});

describe('Dollar and Franc Equality', () => {

    it('5 dollars not equal to 5 francs', () => {
        const fiveDollars = Money.dollar(5);
        const fiveFrancs = Money.franc(5);
        expect(fiveDollars.equals(fiveFrancs)).toEqual(false);
    });

});
