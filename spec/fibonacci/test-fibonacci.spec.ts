import { Fibonacci } from '../../src/fibonacci/fibonacci';
import { FibonacciItem } from '../../src/fibonacci/fibonacci.types';

fdescribe('Fibonacci', () => {

    const cases: FibonacciItem[] = [
        {index: 0, value: 0},
        {index: 1, value: 1},
        {index: 2, value: 1},
        {index: 3, value: 2},
        {index: 4, value: 3},
        {index: 5, value: 5},
        {index: 6, value: 8},
        {index: 7, value: 13},
        {index: 8, value: 21}
    ];

    it('Fibonacci sequence', () => {
        for (let i = 0; i < cases.length; i++) {
            const item: FibonacciItem = Fibonacci.getItem(i);
            expect(item.index).toBe(cases[i].index);
            expect(item.value).toBe(cases[i].value);
        }
    });

});
