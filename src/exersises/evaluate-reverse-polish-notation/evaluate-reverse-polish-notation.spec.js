const asset = require('assert');
const evalRPN = require('./evaluate-reverse-polish-notation.stack');

asset.strictEqual(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]), 22);
asset.strictEqual(evalRPN(["1", "2", "3", "+", "4", "1", "+", "*", "+"]), 26);
asset.strictEqual(evalRPN(["2", "1", "+", "3", "*"]), 9);
asset.strictEqual(evalRPN(["4", "13", "5", "/", "+"]), 6);
asset.strictEqual(evalRPN(["10", "6", "+", "12", "12", "+", "/"]), 0);