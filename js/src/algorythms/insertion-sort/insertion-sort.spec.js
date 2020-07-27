const {insertionSort} = require('./insertion-sort');

describe('insertionSort', () => {
    it('will sort an array', () => {
        expect(insertionSort([1, 3, 2])).toEqual([1, 2, 3]);
        expect(insertionSort([2])).toEqual([2]);
        expect(insertionSort([5, -1, 12])).toEqual([-1, 5, 12]);
    });
});