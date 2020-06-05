import { Money } from './money';
import { Expression } from './expression';
import { Bank } from './bank';

export class Sum implements Expression {

    constructor(private augend: Expression,
                private addend: Expression) {
    }

    plus(addend: Expression): Expression {
        return new Sum(this, addend);
    }

    times(multiplier: number): Expression {
        return new Sum(this.augend.times(multiplier), this.addend.times(multiplier));
    }

    reduce(bank: Bank, toCurrency: string): Money {
        const amount: number = this.augend.reduce(bank, toCurrency).getAmount()
            + this.addend.reduce(bank, toCurrency).getAmount();
        return Money.createMoney(amount, toCurrency);
    }

}
