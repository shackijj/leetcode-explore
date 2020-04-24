const gcd = require('./gcd');

describe('gcd', () => {
    it('will return gcd', () => {
        expect(gcd(4, 2)).toBe(2);
        expect(gcd(13, 11)).toBe(1);
        expect(gcd(48, 42)).toBe(6);
    });
});