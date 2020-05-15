const dailyTemperatures = require('./daily-temperatures.stack');

describe('dailyTemperatures', () => {
    it('case 0', () => {
        expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    });
    it('case 1', () => {
        expect(dailyTemperatures([33, 32, 34, 31])).toEqual([2, 1, 0, 0]);
    });
    it('case 2', () => {
        expect(dailyTemperatures([33, 32, 32, 34, 31])).toEqual([3, 2, 1, 0, 0]);
    });
    it('case 3', () => {
        expect(dailyTemperatures([33])).toEqual([0]);
    });

    it('case 4', () => {
        expect(dailyTemperatures([0, 100])).toEqual([1, 0]);
    });
})