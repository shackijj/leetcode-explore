const sweetsAndToys = require('./sweets-and-toys');

describe('sweets-and-toys', () => {
    it('will return the max number of guests', () => {
        expect(sweetsAndToys(48, 42, [0, 2, 1, 0, 1, 1])).toEqual(4);
        expect(sweetsAndToys(5, 15, [0, 0, 0, 0, 0])).toEqual(5);
        expect(sweetsAndToys(1, 1, [1])).toEqual(0);
    });
});