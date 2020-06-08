const MinStack = require('./min-stack');

describe('MinStack', () => {
    it('case 1', () => {
        const minStack = new MinStack();
        minStack.push(-2);
        // ms [-2]
        // as []
        // history ms
        minStack.push(0);
        // ms [-2]
        // as [0] ms-as
        minStack.push(-3);
        // ms [-2, -3]
        // as [0] ms-as-ms
        expect(minStack.getMin()).toBe(-3);
        // ms [-2, -3]
        // as [0] ms-as-ms
        minStack.pop();
        // ms [-2]
        // as [0]
        // as [0] ms-as
        expect(minStack.top()).toBe(0);
        expect(minStack.getMin()).toBe(-2);
    });

    it('case 2', () => {
        const minStack = new MinStack();
        minStack.push(-5);
        expect(minStack.getMin()).toBe(-5);
        minStack.push(3);
        expect(minStack.top()).toBe(3);
        minStack.push(-5);
        expect(minStack.getMin()).toBe(-5);
        minStack.pop();
        expect(minStack.top()).toBe(3);
        expect(minStack.getMin()).toBe(-5);
    });

    it('case 3', () => {
        const minStack = new MinStack();
        minStack.push(-1);
        minStack.push(8);
        minStack.push(0);
        minStack.push(-5);
        minStack.push(17);
        expect(minStack.getMin()).toBe(-5);
        minStack.pop();
        minStack.pop();
        expect(minStack.getMin()).toBe(-1);
        minStack.pop();
        expect(minStack.top()).toBe(8);
    });
});