const gcd = require('./gcd');
const recursiveGcd = require('./recursive-gcd');

describe('gcd', () => {
    it('will return gcd', () => {
        expect(gcd(4, 2)).toBe(2);
        expect(gcd(13, 11)).toBe(1);
        expect(gcd(48, 42)).toBe(6);
    });
});


describe('recursiveGcd', () => {
    it('will return gcd', () => {
        expect(recursiveGcd(4, 2)).toBe(2);
        expect(recursiveGcd(13, 11)).toBe(1);
        expect(recursiveGcd(48, 42)).toBe(6);
    });
});