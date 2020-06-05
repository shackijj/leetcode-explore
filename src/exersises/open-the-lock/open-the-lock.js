var mod10 = (num) => num >= 0 ? num % 10 : ((num * -1) % 10) * -1 + 10

function generateMoves(next) {
    const first = parseInt(next[0]);
    const second = parseInt(next[1]);
    const third = parseInt(next[2]);
    const fourth = parseInt(next[3]);
    return [
        [mod10(first + 1), second, third, fourth],
        [mod10(first - 1), second, third, fourth],
        [first, mod10(second + 1), third, fourth],
        [first, mod10(second - 1), third, fourth],
        [first, second, mod10(third + 1), fourth],
        [first, second, mod10(third - 1), fourth],
        [first, second, third, mod10(fourth - 1)],
        [first, second, third, mod10(fourth + 1)],
    ].map((next) => next.join(''));
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const queue = ['0000'];
    let level = 0;
    deadends = new Set(deadends);
    const visited = new Set(queue);

    while(queue.length !== 0) {
        const size = queue.length;

        for(let i = 0; i < size; i++) {
            const code = queue.shift();
            if (deadends.has(code)) {
                continue;
            }
            if (code === target) {
                return level;
            }
            generateMoves(code).forEach(next => {
                if (!visited.has(next) && !deadends.has(next)) {
                    queue.push(next);
                    visited.add(next);
                }
            })
        }
        level += 1;
    }
    return -1;
};

module.exports = openLock;