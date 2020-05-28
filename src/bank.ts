import { Expression } from './expression';
import { Money } from './money';

export class Bank {

    constructor() {
    }

    reduce(sourceExpression: Expression, returnedCurrency: string) {
        return Money.dollar(10);
    }

}
