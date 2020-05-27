import { Dollar } from '../src/dollar';

describe('', () => {

    it('five dollars multiplied by two is ten dollars', () => {
        const five = new Dollar(5);
        five.times(2)
        expect(five.amount).toEqual(10)
    });

});
