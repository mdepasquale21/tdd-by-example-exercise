import { Dollar } from '../src/dollar';
import { Franc } from '../src/franc';

describe('Dollar Equality', () => {

    it('5 dollars equal to 5 dollars', () => {
        const fiveDollars1 = new Dollar(5);
        const fiveDollars2 = new Dollar(5);
        expect(fiveDollars1.equals(fiveDollars2)).toEqual(true);
    });

    it('5 dollars not equal to 6 dollars', () => {
        const fiveDollars = new Dollar(5);
        const sixDollars = new Dollar(6);
        expect(fiveDollars.equals(sixDollars)).toEqual(false);
    });

});

describe('Franc Equality', () => {

    it('5 francs equal to 5 francs', () => {
        const fiveFrancs1 = new Franc(5);
        const fiveFrancs2 = new Franc(5);
        expect(fiveFrancs1.equals(fiveFrancs2)).toEqual(true);
    });

    it('5 francs not equal to 6 francs', () => {
        const fiveFrancs = new Franc(5);
        const sixFrancs = new Franc(6);
        expect(fiveFrancs.equals(sixFrancs)).toEqual(false);
    });

});

describe('Dollar and Franc Equality', () => {

    it('5 dollars not equal to 5 francs', () => {
        const fiveDollars = new Dollar(5);
        const fiveFrancs = new Franc(5);
        expect(fiveDollars.equals(fiveFrancs)).toEqual(false);
    });

});
