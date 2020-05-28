import { Franc } from '../../src/franc';

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
