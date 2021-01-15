// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
function NestedInteger() {
    let _value = null;

    this.isInteger = function() {
        return Number.isInteger(_value);
    };
    // Return the single integer that this NestedInteger holds, if it holds a single integer
    // Return null if this NestedInteger holds a nested list

    this.getInteger = function() {
        return _value;
    };
    // Set this NestedInteger to hold a single integer equal to value.
    // @return {void}
    this.setInteger = function(value) {
        _value = value
    };
    // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
    // @return {void}
    this.add = function(elem) {
        if (_value === null) {
            _value = [elem]
        } else {
            _value.push(elem)
        }
    };
    // Return the nested list that this NestedInteger holds, if it holds a nested list
    // Return null if this NestedInteger holds a single integer
    // @return {NestedInteger[]}
    this.getList = function() {
        return _value;
    };
};

/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {

    /**
    * @param {NestedInteger[]} list
    * @param {number} depth
    * @return {number}
    */
    function recDepthSum(list, depth) {
        let result = 0;
        for (ni of list) {
            if (ni.isInteger()) {
                result += ni.getInteger() * depth
            } else {
                result += recDepthSum(ni.getList(), depth + 1)
            }
        }
        return result;
    }

    return recDepthSum(nestedList, 1);
};

module.exports = {NestedInteger, depthSum};