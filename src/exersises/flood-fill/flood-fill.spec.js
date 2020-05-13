const floodFill = require('./flood-fill');

describe('flood-fill', () => {
    it('case 0', () => {
        const image = [[1,1,1],[1,1,0],[1,0,1]];
        expect(floodFill(image, 1, 1, 2)).toEqual([[2,2,2],[2,2,0],[2,0,1]])
    });

    it('case 1', () => {
        const image = [[1]];
        expect(floodFill(image, 0, 0, 2)).toEqual([[2]])
    });

    it('case 1', () => {
        const image = [[0,0,0],[0,0,0],[0,0,0]];
        expect(floodFill(image, 0, 0, 3)).toEqual([[3,3,3],[3,3,3],[3,3,3]])
    });

    it('case 2', () => {
        const image = [
            [0,0,0],
            [0,1,1]
        ]
        expect(floodFill(image, 1, 1, 1)).toEqual([[0,0,0],[0,1,1]])
    });
});