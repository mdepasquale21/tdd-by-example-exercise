import { Dollar } from '../src/dollar';
import { Franc } from '../src/franc';

describe('Dollar Multiplication', () => {
    let five: Dollar;

    beforeEach(() => {
        five = new Dollar(5);
    });

    it('5 dollars times 2 is 10 dollars', () => {
        const product: Dollar = five.times(2);
        expect(product).toEqual(new Dollar(10));

    });

    it('5 dollars times 3 is 15 dollars', () => {
        const product: Dollar = five.times(3);
        expect(product).toEqual(new Dollar(15));
    });

});

describe('Franc Multiplication', () => {
    let five: Franc;

    beforeEach(() => {
        five = new Franc(5);
    });

    it('5 francs times 2 is 10 francs', () => {
        const product: Franc = five.times(2);
        expect(product).toEqual(new Franc(10));

    });

    it('5 francs times 3 is 15 francs', () => {
        const product: Franc = five.times(3);
        expect(product).toEqual(new Franc(15));
    });

});
