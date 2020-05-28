import { Dollar } from '../../src/dollar';

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
