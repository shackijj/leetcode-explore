const { addTwoNumbers, ListNode } = require('./add-two-numbers');
const assert = require('assert').strict;


function arrayToListNide(arr) {
    let root = new ListNode(arr[0]);
    let prev = root;

    for (let i = 1; i < arr.length; i++) {
        const node = new ListNode(arr[i]);
        prev.next = node;
        prev = node;
    }

    return root;
}

{
    const input = [0, 1];
    const result = arrayToListNide([0, 1]);

    let next = result;
    let i = 0;
    while (next !== null) {
        assert.equal(next.val, input[i]);
        next = next.next;
        i++;
    }
}

{
    const l1 = arrayToListNide([1])
    const l2 = arrayToListNide([1])
    const expected = arrayToListNide([2])

    assert.deepEqual(addTwoNumbers(l1, l2), expected)
}

{
    const l1 = arrayToListNide([1, 2])
    const l2 = arrayToListNide([1])
    const expected = arrayToListNide([2, 2])

    assert.deepEqual(addTwoNumbers(l1, l2), expected)
}

{
    const l1 = arrayToListNide([1])
    const l2 = arrayToListNide([1, 2])
    const expected = arrayToListNide([2, 2])

    assert.deepEqual(addTwoNumbers(l1, l2), expected)
}

{
    const l1 = arrayToListNide([9])
    const l2 = arrayToListNide([9])
    const expected = arrayToListNide([8, 1])

    assert.deepEqual(addTwoNumbers(l1, l2), expected)
}

{
    const l1 = arrayToListNide([6])
    const l2 = arrayToListNide([4])
    const expected = arrayToListNide([0, 1])

    assert.deepEqual(addTwoNumbers(l1, l2), expected)
}

{
    const l1 = arrayToListNide([1, 3])
    const l2 = arrayToListNide([9])
    const expected = arrayToListNide([0, 4])

    assert.deepEqual(addTwoNumbers(l1, l2), expected)
}

{
    const l1 = arrayToListNide([2, 4])
    const l2 = arrayToListNide([5, 6])
    const expected = arrayToListNide([7, 0, 1])
    assert.deepEqual(addTwoNumbers(l1, l2), expected)
}

{
    const l1 = arrayToListNide([0])
    const l2 = arrayToListNide([0])
    const expected = arrayToListNide([0])
    assert.deepEqual(addTwoNumbers(l1, l2), expected)
}

{
    const l1 = arrayToListNide([2,4,3])
    const l2 = arrayToListNide([5,6,4])
    const expected = arrayToListNide([7,0,8])

    assert.deepEqual(addTwoNumbers(l1, l2), expected)
}

{
    const l1 = arrayToListNide([9,9,9,9,9,9,9])
    const l2 = arrayToListNide([9,9,9,9])
    const expected = arrayToListNide([8,9,9,9,0,0,0,1])

    assert.deepEqual(addTwoNumbers(l1, l2), expected)
}