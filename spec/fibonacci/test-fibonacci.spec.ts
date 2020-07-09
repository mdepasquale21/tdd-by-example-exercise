import { Fibonacci } from '../../src/fibonacci/fibonacci';
import { FibonacciItem } from '../../src/fibonacci/fibonacci.types';

fdescribe('Fibonacci', () => {

    const cases: FibonacciItem[] = [
        {index: 0, value: 0},
        {index: 1, value: 1},
        {index: 2, value: 1},
        {index: 3, value: 2}
        // {index: 4, value: 3}
    ];

    it('Fibonacci sequence', () => {
        for (let i = 0; i < cases.length; i++) {
            expect(Fibonacci.getItem(i).value).toBe(cases[i].value);
        }
    });

});
