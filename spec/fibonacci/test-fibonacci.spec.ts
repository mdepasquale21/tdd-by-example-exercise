import { Fibonacci } from '../../src/fibonacci/fibonacci';

fdescribe('Fibonacci', () => {

    const cases = [
        {index: 0, value: 0},
        {index: 1, value: 1},
        {index: 2, value: 1},
        {index: 3, value: 2},
        // {index: 4, value: 3}
    ];

    it('Fibonacci sequence', () => {
        for (let i = 0; i < cases.length; i++) {
            expect(new Fibonacci(i).get()).toBe(cases[i].value);
        }
    });

});
