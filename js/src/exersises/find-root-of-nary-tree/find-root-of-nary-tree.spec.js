const findRoot = require('./find-root-of-nary-tree');
const assert = require('assert').strict;


function Node(val, children) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
};

{
    const five = new Node(5);
    const expected = findRoot([five])

    assert.deepEqual(five, expected);
}

{
    const five = new Node(5);
    const six = new Node(6);
    const two = new Node(2);
    const four = new Node(4);

    const three = new Node(3, [five, six]);

    const one = new Node(
        1,
        [
            three,
            two,
            four
        ]
    )
    let actual = findRoot([one, two, three, four, five, six])
    assert.deepEqual(actual, one);

    actual = findRoot([two, one, three, four, five, six])
    assert.deepEqual(actual, one);

    actual = findRoot([two, three, one, four, five, six])
    assert.deepEqual(one, one);
}

{
    const two = new Node(2);
    const three = new Node(3);
    const one = new Node(4, [two, three]);

    const actual = findRoot([one, two, three])

    assert.deepEqual(actual, one);
}

{
    /* leaves */
    const n2 = new Node(2);
    const n6 = new Node(6);
    const n10 = new Node(10);
    const n14 = new Node(14);
    const n12 = new Node(12);
    const n13 = new Node(13);

    const n11 = new Node(11, [n14])
    const n7 = new Node(7, [n11])
    const n3 = new Node(3, [n6, n7])

    const n8 = new Node(8, [n12])
    const n4 = new Node(4, [n8])

    const n9 = new Node(9, [n13])
    const n5 = new Node(5, [n9, n10])

    const n1 = new Node(1, [n2, n3, n4, n5])

    const actual = findRoot([n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14])

    assert.deepEqual(actual, n1);
}