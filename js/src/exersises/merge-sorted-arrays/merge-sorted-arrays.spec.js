const assert = require('assert').strict;
const merge = require('./merge-sorted-arrays');

{
    const nums1 = [1];
    merge(nums1, 1, [], 0)
    assert.deepEqual(nums1, [1], 'one element')
}

{
    const nums1 = [2, 0];
    merge(nums1, 1, [1], 1)
    assert.deepEqual(nums1, [1, 2], 'two elements 1')
}

{
    const nums1 = [1, 0];
    merge(nums1, 1, [2], 1)
    assert.deepEqual(nums1, [1, 2], 'two elements 2')
}

{
    const nums1 = [2, 5, 0];
    merge(nums1, 2, [3], 1)
    assert.deepEqual(nums1, [2, 3, 5], 'three elements 1')
}

{
    const nums1 = [2, 0, 0];
    merge(nums1, 1, [1, 6], 2)
    assert.deepEqual(nums1, [1, 2, 6], 'three elements 2')
}

{
    const nums1 = [1,2,3,0,0,0];
    merge(nums1, 3, [2,5,6], 3)
    assert.deepEqual(nums1, [1,2,2,3,5,6], 'several elements 1')
}

{
    const nums1 = [1,3,0,0];
    merge(nums1, 2, [2,5], 2)
    assert.deepEqual(nums1, [1,2,3,5], 'several elements 2')
}

{
    const nums1 = [4,5,0,0];
    merge(nums1, 2, [2,3], 2)
    assert.deepEqual(nums1, [2,3,4,5], 'several elements 3')
}

{
    const nums1 = [2,5,6,0,0,0];
    merge(nums1, 3, [1,2,3], 3)
    assert.deepEqual(nums1, [1,2,2,3,5,6], 'several elements 3')
}

{
    const nums1 = [2,5,6,0,0,0];
    merge(nums1, 3, [1,2,8], 3)
    assert.deepEqual(nums1, [1,2,2,5,6,8], 'several elements 4')
}

{
    const nums1 = [2,5,6,0,0,0];
    merge(nums1, 3, [1,2,8], 3)
    assert.deepEqual(nums1, [1,2,2,5,6,8], 'several elements 4')
}