function isOpeningBracket(char) {
    return char === '{' || char === '(' || char === '[';
}

function arePair(opening, closing) {
    return (opening === '{' && closing === '}') ||
        (opening === '(' && closing === ')') ||
        (opening === '[' && closing === ']')
}

function isValid(str) {
    const stack = [];

    for(let cur of str) {
        if (isOpeningBracket(cur)) {
            stack.push(cur);
            continue;
        }

        if (arePair(stack[stack.length - 1], cur)) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0 ? true : false;
}

module.exports = isValid;