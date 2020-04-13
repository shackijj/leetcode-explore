/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
function findTargetSumWays(nums, S) {
    // agregate to  {[key: number]: number of items}
    const map = new Map();
    nums.forEach(num => {
        if (map.has(num)) {
            const val = map.get(num);
            map.set(num, val + 1);
        } else {
            map.set(num, 1);
        }
    })
    const graph = [];
    map.forEach((times, num) => {
        const node = [];
        if (times === 1) {
            graph.push([num, 1, 1])
            graph.push([num * -1, 1, 1]);
        } else {
            for(let p = times, m = 0; p >= 0; p--, m++) {
                node.push([num * p - num * m, times, p > m ? times + 1 - p : times + 1 - m]);
            }
        }
        graph.push(node);
    });

    
    let result = 0;
    // node {value: number, chose: [5, 2]}
    // create graph [[first member nodes], [second member nodes]]
    function dfs(placeIdx, nodeIdx, sum, ways) {
        if (placeIdx === graph.length - 1) {
            const node = graph[placeIdx][nodeIdx];
            if (sum + node[0] === S) {
                result += ways * choose(node[1], node[2]);
            }
        } else {
            const node = graph[placeIdx][nodeIdx];
            const nextLevel = graph[placeIdx + 1];
            nextLevel.forEach((_, curIdx) => {
                dfs(placeIdx + 1, curIdx, sum + node[0], ways * choose(node[1], node[2]))
            });
        }
    }

    graph[0].forEach((node, curIdx) => {
        dfs(0, curIdx, node[0], choose(node[1], node[2]))
    });

    return result;
};

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function choose(n, r) {
    return factorial(n) / (factorial(n - r) * factorial(r))
}

// Can we do better?
// Time complexity is O(2^n) we visit each node 2 * level times
// How can we vistit a node exactly one.
module.exports = findTargetSumWays;