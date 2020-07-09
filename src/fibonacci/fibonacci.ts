import { FibonacciItem } from './fibonacci.types';

export class Fibonacci {

    static getItem(index: number): FibonacciItem {
        let value: number;
        if (index === 0 || index === 1) {
            value = index;
        } else {
            value = Fibonacci.getItem(index - 1).value + Fibonacci.getItem(index - 2).value;
        }
        return {index: index, value: value};
    }

}
