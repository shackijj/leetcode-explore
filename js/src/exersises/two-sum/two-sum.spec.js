const twoSum = require('./two-sum');

describe('two-sum', () => {
    it('case 0', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0,1]);
        expect(twoSum([1, 1], 2)).toEqual([0, 1]);
        expect(twoSum([3, 1, 2], 3)).toEqual([1, 2]);
        expect(twoSum([1, 2, 2], 2)).toEqual(undefined);
    });
});