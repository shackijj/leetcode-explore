function last(array) {
    return array[array.length - 1];
}

class MinStack {
    constructor() {
        this.mins = [];
        this.nums = [];
    }
    /** Push element x onto stack. */
    push(el) {
        this.nums.push(el);

        if (last(this.mins) === undefined || el <= last(this.mins)) {
            this.mins.push(el);
        }
    }
    /**  Removes the element on top of the stack. */
    pop() {
        const el = this.nums.pop();
        if (el === last(this.mins)) {
            this.mins.pop();
        }
        return el;
    }
    /** Get the top element */
    top() {
        return last(this.nums);
    }
    /** Retrieve the minimum element in the stack. */
    getMin() {
        return last(this.mins);
    }
}


/**
 * Can we do better? (Better applies not only to mem/time complexity, but also simplicity)
 */
module.exports = MinStack;