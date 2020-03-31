const {cloneGraph, Node} = require('./clone-graph');

describe('cloneGraph', () => {
    it('case 1', () => {
        const v4 = new Node(4, []);
        const v3 = new Node(3, []);
        const v2 = new Node(2, []); 
        const v1 = new Node(1, [v2, v3, v4]);

        const copy = cloneGraph(v1);

        expect(copy).toEqual(v1);
        expect(copy).not.toBe(v1);
    });
});