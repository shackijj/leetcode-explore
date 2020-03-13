const wallsAndGates = require('./walls-and-gates');

const INF = 2147483647;

describe('wallsAndGates', () => {
    it('will print', () => {
        const input = [
            [INF, -1, 0, INF],
            [INF, INF, INF, -1],
            [INF, -1, INF, -1],
            [0, -1, INF, INF]
        ];

        wallsAndGates(input);

        const expected = [
            [3, -1, 0,  1],
            [2,  2, 1, -1],
            [1, -1, 2, -1],
            [0, -1, 3,  4],
        ];
        expect(input).toEqual(expected)
    })
});
