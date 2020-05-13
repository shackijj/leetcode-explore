const dailyTemperatures = require('./daily-temperatures');

describe('dailyTemperatures', () => {
    it('case 0', () => {
        expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    });
    it('case 1', () => {
        expect(dailyTemperatures([3, 2, 4, 1])).toEqual([2, 1, 0, 0]);
    });
    it('case 2', () => {
        expect(dailyTemperatures([3, 2, 2, 4, 1])).toEqual([3, 2, 1, 0, 0]);
    });
    it('case 3', () => {
        expect(dailyTemperatures([3])).toEqual([0]);
    });
})