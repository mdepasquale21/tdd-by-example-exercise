import { Money } from './money';
import { Expression } from './expression';

export class Sum implements Expression {

    constructor(public augend: Money, public addend: Money) {
    }

}
