const MovingAverage = require('./moving-average');

describe('MovingAverage', () => {
    it('will return average', () => {
        const m = new MovingAverage(3);
        expect(m.next(1)).toBe(1);
        expect(m.next(10)).toBe((1 + 10) / 2);
        expect(m.next(3)).toBe((1 + 10 + 3) / 3);
        expect(m.next(5)).toBe((10 + 3 + 5) / 3);
        expect(m.next(5)).toBe((5 + 3 + 5) / 3);
    })
});