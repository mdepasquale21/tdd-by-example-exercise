import { Fibonacci } from '../../src/fibonacci/fibonacci';

fdescribe('Fibonacci', () => {

    it('first number of the sequence should be 0', () => {
        const fibonacci = new Fibonacci(0);
        expect(fibonacci.get()).toBe(0);
    });

    it('second number of the sequence should be 1', () => {
        const fibonacci = new Fibonacci(1);
        expect(fibonacci.get()).toBe(1);
    });

    it('third number of the sequence should be 1', () => {
        const fibonacci = new Fibonacci(2);
        expect(fibonacci.get()).toBe(1);
    });

    it('fourth number of the sequence should be 2', () => {
        const fibonacci = new Fibonacci(3);
        expect(fibonacci.get()).toBe(2);
    });

    xit('fifth number of the sequence should be 3', () => {
        const fibonacci = new Fibonacci(4);
        expect(fibonacci.get()).toBe(3);
    });

});
