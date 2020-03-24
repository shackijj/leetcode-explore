const numberOfIslands = require('./number-of-islands');

describe('number of islands', () => {
    it('case 1', () => {
        const input = [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0' ,'0', '0', '0', '0'],
        ];
        expect(numberOfIslands(input)).toBe(1);
    });

    it('case 2', () => {
        const input = [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ];
        expect(numberOfIslands(input)).toBe(3);
    });

    it('case 3', () => {
        const input = [
            ['0'],
        ];
        expect(numberOfIslands(input)).toBe(0);
    });

    it('case 4', () => {
        const input = [
            ['1'],
        ];
        expect(numberOfIslands(input)).toBe(1);
    });

    it('case 5', () => {
        const input = [
            ['0', '0', '1'],
            ['0', '0', '0'],
            ['1', '0', '0'],
        ];
        expect(numberOfIslands(input)).toBe(2);
    });

    it('case 6', () => {
        const input = [
            ['0', '0', '1'],
            ['0', '0', '1'],
            ['1', '1', '1'],
        ];
        expect(numberOfIslands(input)).toBe(1);
    });
});
