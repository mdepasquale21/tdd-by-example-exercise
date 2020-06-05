import { Money } from '../../src/money/money';
import { Expression } from '../../src/money/expression';
import { Bank } from '../../src/money/bank';
import { Sum } from '../../src/money/sum';

describe('Addition', () => {

    it('5 dollars + 5 dollars is 10 dollars', () => {
        const five: Expression = Money.createMoney(5, 'USD');
        const sum: Expression = five.plus(five);

        const bank: Bank = new Bank();

        const reduced: Money = bank.reduce(sum, 'USD');

        expect(reduced).toEqual(Money.createMoney(10, 'USD'));
    });

    it('if all addends have same currency and the target has same currency' +
        ' should return a money with amount the sum of the single amounts:' +
        ' 3 dollars + 4 dollars = 7 dollars', () => {
        const sum: Expression = new Sum(Money.createMoney(3, 'USD'), Money.createMoney(4, 'USD'));
        const bank: Bank = new Bank();

        const result: Money = bank.reduce(sum, 'USD');

        expect(result).toEqual(Money.createMoney(7, 'USD'))
    });

});
