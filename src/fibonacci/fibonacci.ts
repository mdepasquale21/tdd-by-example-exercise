import { FibonacciItem } from './fibonacci.types';

export class Fibonacci {

    static getItem(index: number): FibonacciItem {
        return {index: index, value: this.getValueAt(index)};
    }

    private static getValueAt(index: number): number {
        if (index === 0 || index === 1) {
            return index;
        } else {
            return Fibonacci.getValueAt(index - 1) + Fibonacci.getValueAt(index - 2);
        }
    }

}
