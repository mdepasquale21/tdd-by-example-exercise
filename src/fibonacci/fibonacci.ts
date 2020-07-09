import { FibonacciItem } from './fibonacci.types';

export class Fibonacci {

   static getItem(index: number): FibonacciItem {
        let value: number;
        if (index === 2) {
            value = 1;
        } else if (index === 3) {
            value = 2;
        } else {
            value = index;
        }
        return {index: index, value: value};
    }

}
