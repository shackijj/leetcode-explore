function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let d1 = l1;
    let d2 = l2;
    let r = 0;

    let root = null;
    let prev = null;

    function createRootOrNode(val) {
        if (val >= 10) {
            r = 1;
            val = val - 10;
        } else {
            r = 0;
        }

        if (root === null) {
            root = new ListNode(val)
            prev = root;
        } else {
            prev.next = new ListNode(val);
            prev = prev.next;
        }
    }

    while(d1 !== null || d2 !== null || r !== 0) {
        if (d1 !== null && d2 !== null) {
            createRootOrNode(d1.val + d2.val + r);
            d1 = d1.next;
            d2 = d2.next;
        } else if (d1 === null && d2 !== null) {
            createRootOrNode(d2.val + r);
            d2 = d2.next;
        } else if (d1 !== null && d2 === null) {
            createRootOrNode(d1.val + r);
            d1 = d1.next;
        } else {
            r = 0
            createRootOrNode(1);
        }
    }

    return root;
};

module.exports = { addTwoNumbers, ListNode };
