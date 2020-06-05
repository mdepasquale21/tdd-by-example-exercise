import { Money } from '../../src/money/money';

describe('Equality with same currency', () => {

    it('5 dollars equal to 5 dollars', () => {
        const fiveDollars1: Money = Money.createMoney(5, 'USD');
        const fiveDollars2: Money = Money.createMoney(5, 'USD');

        expect(fiveDollars1.equals(fiveDollars2)).toEqual(true);
    });

    it('5 dollars not equal to 6 dollars', () => {
        const fiveDollars: Money = Money.createMoney(5, 'USD');
        const sixDollars: Money = Money.createMoney(6, 'USD');

        expect(fiveDollars.equals(sixDollars)).toEqual(false);
    });

});

describe('Equality with different currencies', () => {

    it('5 dollars not equal to 5 francs', () => {
        const fiveDollars: Money = Money.createMoney(5, 'USD');
        const fiveFrancs: Money = Money.createMoney(5, 'CHF');
        expect(fiveDollars.equals(fiveFrancs)).toEqual(false);
    });

});
