const {NestedInteger, depthSum} = require('./nested-list-weight-sum');
const assert = require('assert').strict;

const ni2 = new NestedInteger();
ni2.setInteger(2);

const ni3 = new NestedInteger();
ni3.setInteger(3);

const nested2and3 = new NestedInteger();
nested2and3.add(ni2);
nested2and3.add(ni3);

const nested2and2 = new NestedInteger();
nested2and2.add(ni2);
nested2and2.add(ni2);

{

    assert.equal(depthSum([ni2]), 2)
}

{
    assert.equal(depthSum([ni2, ni3]), 5)
}

{
    assert.equal(depthSum([nested2and3]), 10)
}

{

    assert.equal(depthSum([nested2and3, ni3]), 13)
}

{
    assert.equal(depthSum([nested2and2, ni3, nested2and2]), 19)
}