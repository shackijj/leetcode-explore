const {binarySearch} = require('./recursive-binary-search');

describe('bubbleSort', () => {
    it('will return true', () => {
        expect(binarySearch([1, 2, 3], 1)).toBe(true);
        expect(binarySearch([1, 2, 3], 1)).toBe(true);
        expect(binarySearch([1, 2, 3], 3)).toBe(true);
    });
    it('will return false', () => {
        expect(binarySearch([1, 2, 3], 0)).toBe(false);
        expect(binarySearch([1, 2, 3], -1)).toBe(false);
        expect(binarySearch([1, 2, 3], 9)).toBe(false);
    });
});