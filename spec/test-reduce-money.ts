import { Bank } from '../src/bank';
import { Money } from '../src/money/money';

describe('Reduce Money', () => {

    it('Bank should reduce money', () => {
        const bank: Bank = new Bank();
        const result: Money = bank.reduce(Money.dollar(1), 'USD');
        expect(result).toEqual(Money.dollar(1));
    });

});
