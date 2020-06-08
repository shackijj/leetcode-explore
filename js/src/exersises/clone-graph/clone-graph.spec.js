const {cloneGraph, Node} = require('./clone-graph');

describe('cloneGraph', () => {
    it('case 1', () => {
        const v2 = new Node(2, []); 
        const v1 = new Node(1, [v2]);

        v2.neighbors.push(v1);

        const copy = cloneGraph(v1);

        expect(copy).toEqual(
            expect.objectContaining({
                val: 1,
                neighbors: [
                    expect.objectContaining({
                        val: 2,
                        neighbors: [
                            expect.objectContaining({
                                val: 1
                            })
                        ],
                    }),
                ]
            })
        );
        expect(copy).not.toBe(v1);
    });

    it('case 2', () => {
        const v3 = new Node(3, []);
        const v2 = new Node(2, []); 
        const v1 = new Node(1, [v2, v3]);

        v2.neighbors.push(v1);
        v3.neighbors.push(v1);

        const copy = cloneGraph(v1);

        expect(copy).toEqual(
            expect.objectContaining({
                val: 1,
                neighbors: [
                    expect.objectContaining({
                        val: 2,
                        neighbors: [
                            expect.objectContaining({
                                val: 1
                            }),
                        ],
                    }),
                    expect.objectContaining({
                        val: 3,
                        neighbors: [
                            expect.objectContaining({
                                val: 1
                            }),
                        ],
                    }),
                ]
            })
        );
        expect(copy).not.toBe(v1);
    });

    it('case 2', () => {
        const v3 = new Node(3, []);
        const v2 = new Node(2, []); 
        const v1 = new Node(1, [v2, v3]);

        v2.neighbors.push(v1);
        v2.neighbors.push(v3);
        v3.neighbors.push(v2);
        v3.neighbors.push(v1);

        const copy = cloneGraph(v1);

        expect(copy).toEqual(
            expect.objectContaining({
                val: 1,
                neighbors: [
                    expect.objectContaining({
                        val: 2,
                        neighbors: [
                            expect.objectContaining({
                                val: 1
                            }),
                            expect.objectContaining({
                                val: 3
                            }),
                        ],
                    }),
                    expect.objectContaining({
                        val: 3,
                        neighbors: [
                            expect.objectContaining({
                                val: 2
                            }),
                            expect.objectContaining({
                                val: 1
                            }),
                        ],
                    }),
                ]
            })
        );
        expect(copy).not.toBe(v1);
    });

    it('case 3', () => {
        const v1 = new Node(1, []);
        const copy = cloneGraph(v1);
        expect(copy).toEqual(copy);
        expect(copy).not.toBe(v1);
    });

    it('case 4', () => {
        const v5 = new Node(5, []);
        const v4 = new Node(4, []);
        const v3 = new Node(3, []);
        const v2 = new Node(2, []); 
        const v1 = new Node(1, [v2, v3]);

        v2.neighbors.push(v1);
        v2.neighbors.push(v3);
        v2.neighbors.push(v4);

        v3.neighbors.push(v2);
        v3.neighbors.push(v5);
        v3.neighbors.push(v1);

        v4.neighbors.push(v2);
        v4.neighbors.push(v5);

        v5.neighbors.push(v4);
        v5.neighbors.push(v3);

        const copy = cloneGraph(v1);

        expect(copy).toEqual(
            expect.objectContaining({
                val: 1,
                neighbors: [
                    expect.objectContaining({
                        val: 2,
                        neighbors: [
                            expect.objectContaining({
                                val: 1
                            }),
                            expect.objectContaining({
                                val: 3
                            }),
                            expect.objectContaining({
                                val: 4,
                                neighbors: [
                                    expect.objectContaining({
                                        val: 2
                                    }),
                                    expect.objectContaining({
                                        val: 5,
                                        neighbors: [
                                            expect.objectContaining({
                                                val: 4
                                            }),
                                            expect.objectContaining({
                                                val: 3
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    expect.objectContaining({
                        val: 3,
                        neighbors: [
                            expect.objectContaining({
                                val: 2
                            }),
                            expect.objectContaining({
                                val: 5
                            }),
                            expect.objectContaining({
                                val: 1
                            }),
                        ],
                    }),
                ]
            })
        );
        expect(copy).not.toBe(v1);
    });
});