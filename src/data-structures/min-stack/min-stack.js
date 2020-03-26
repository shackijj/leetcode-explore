class MinStack {
    constructor() {
        this.mins = [];
        this.nums = [];
        this.history = [];
    }
    /** Push element x onto stack. */
    push(el) {
        if (this.mins.length === 0 || this.mins[this.mins.length - 1] > el) {
            this.mins.push(el);
            this.history.push(0);
        } else {
            this.nums.push(el);
            this.history.push(1)
        }
    }
    /**  Removes the element on top of the stack. */
    pop() {
        let el;
        let h = this.history.pop();
        if (h === 0) {
            el = this.mins.pop();
        } else {
            el = this.nums.pop();
        }

        if (this.nums[this.nums.length - 1] < this.mins[this.mins.length - 1]) {
            this.history[this.history.length - 1] = 0;
            this.mins.push(this.nums.pop());
        }

        return el;
    }
    /** Get the top element */
    top() {
        if (this.history[this.history.length - 1] === 0) {
            return this.getMin();
        } else {
            return this.nums[this.nums.length - 1];   
        }
    }
    /** Retrieve the minimum element in the stack. */
    getMin() {
        return this.mins[this.mins.length - 1];
    }
}

module.exports = MinStack;