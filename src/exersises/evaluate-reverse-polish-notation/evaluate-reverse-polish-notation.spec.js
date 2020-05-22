const evalRPN = require('./evaluate-reverse-polish-notation.stack');

describe('evalRPN', () => {
    it('will return a number', () => {
        expect(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])).toBe(22);
        expect(evalRPN(["1", "2", "3", "+", "4", "1", "+", "*", "+"])).toBe(26)
        expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
        expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
        expect(evalRPN(["10", "6", "+", "12", "12", "+", "/"])).toBe(0);
        expect(evalRPN(["10"])).toBe(10);
    })
});


// "1", "2", "3", "+", "4", "1", "+", "*", "+"