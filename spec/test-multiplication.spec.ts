import { Dollar } from '../src/dollar';

describe('', () => {
    let five: Dollar;

    beforeEach(() => {
        five = new Dollar(5);
    });

    it('5 dollars times 2 is 10 dollars', () => {
        const product: Dollar = five.times(2)
        expect(product.amount).toEqual(10)

    });

    it('5 dollars times 3 is 15 dollars', () => {
        const product: Dollar = five.times(3)
        expect(product.amount).toEqual(15)
    });

});
