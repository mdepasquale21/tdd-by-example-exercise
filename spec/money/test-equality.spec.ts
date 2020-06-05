import { Money } from '../../src/money/money';
import { Currency } from '../../src/money/currency';

describe('Equality with same currency', () => {

    it('5 dollars equal to 5 dollars', () => {
        const fiveDollars1: Money = Money.createMoney(5, Currency.Dollar);
        const fiveDollars2: Money = Money.createMoney(5, Currency.Dollar);

        expect(fiveDollars1.equals(fiveDollars2)).toEqual(true);
    });

    it('5 dollars not equal to 6 dollars', () => {
        const fiveDollars: Money = Money.createMoney(5, Currency.Dollar);
        const sixDollars: Money = Money.createMoney(6, Currency.Dollar);

        expect(fiveDollars.equals(sixDollars)).toEqual(false);
    });

});

describe('Equality with different Currency', () => {

    it('5 dollars not equal to 5 francs', () => {
        const fiveDollars: Money = Money.createMoney(5, Currency.Dollar);
        const fiveFrancs: Money = Money.createMoney(5, Currency.Franc);
        expect(fiveDollars.equals(fiveFrancs)).toEqual(false);
    });

});
