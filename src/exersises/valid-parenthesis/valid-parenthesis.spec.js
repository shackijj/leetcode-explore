const isValid = require('./valid-parenthesis');

describe('isValid', () => {
    it('case 1', () => {
        expect(isValid('')).toBe(true);
        expect(isValid('{}')).toBe(true);
        expect(isValid('[]')).toBe(true);
        expect(isValid('()')).toBe(true);
        expect(isValid('[[()]]')).toBe(true);
        expect(isValid('{[()()]}')).toBe(true);
    });

    it('case 2', () => {
        expect(isValid('(')).toBe(false);
        expect(isValid('}')).toBe(false);
        expect(isValid('[]}')).toBe(false);
        expect(isValid('{()')).toBe(false);
        expect(isValid('[[()]')).toBe(false);
        expect(isValid('{[())]}')).toBe(false);
    });
});