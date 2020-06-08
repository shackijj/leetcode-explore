const wallsAndGates = require('./walls-and-gates');

const INF = 2147483647;

describe('wallsAndGates', () => {
    it('case 1', () => {
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
    });

    it('case 2', () => {
        const input = [
            [INF, INF, INF, -1],
            [INF, -1, INF, -1],
            [INF, INF, INF, -1],
            [-1, -1, -1, -1]
        ];

        wallsAndGates(input);

        const expected = [
            [INF, INF, INF, -1],
            [INF, -1, INF, -1],
            [INF, INF, INF, -1],
            [-1, -1, -1, -1]
        ];
        expect(input).toEqual(expected)
    });

    it('case 3', () => {
        const input = [
            [0, INF, -1],
            [INF, INF, 0],
            [INF, INF, INF],
        ];

        wallsAndGates(input);

        const expected = [
            [0, 1, -1],
            [1, 1, 0],
            [2, 2, 1],
        ];
        expect(input).toEqual(expected)
    });

    it('case 4', () => {
        const input = [
            [-1, -1, -1],
            [-1, INF, -1],
            [-1, -1, -1],
        ];

        wallsAndGates(input);

        const expected = [
            [-1, -1, -1],
            [-1, INF, -1],
            [-1, -1, -1],
        ];
        expect(input).toEqual(expected)
    });
});
