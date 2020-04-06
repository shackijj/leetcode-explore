const findTargetSumWays = require('./target-sum');

describe('target-sum', () => {
    it('case 1', () => {
        expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toEqual(5);
    });

    it('case 2', () => {
        expect(findTargetSumWays([], 3)).toEqual(0);
    });

    it('case 3', () => {
        expect(findTargetSumWays([2, 3, 4], 5)).toEqual(1);
    });

    it('case 4', () => {
        expect(findTargetSumWays([3, 4, 4, 4], 7)).toEqual(3);
    });

    it('case 5', () => {
        expect(findTargetSumWays([1, 1, 2, 2], 6)).toEqual(1);
        // expect(findTargetSumWays([1, 1, 2, 2], 0)).toEqual(2);
        // expect(findTargetSumWays([1, 1, 2, 2], 2)).toEqual(2);
    });
});