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
            node.push([num, 1, 1])
            node.push([num * -1, 1, 1]);
        } else {
            for(let p = times, m = 0; p >= 0; p--, m++) {
                node.push([num * p - num * m, times, p > m ? p : m]);
            }
        }
        graph.push(node);
    });
    
    let result = 0;
    // node {value: number, chose: [5, 2]}
    // create graph [[first member nodes], [second member nodes]]
    function dfs(placeIdx, sum, ways) {
        if (placeIdx === graph.length - 1) {
            if (sum === S) {
                result += ways;
            }
        } else {
            const nextLevel = graph[placeIdx + 1];
            nextLevel.forEach((node) => {
                dfs(placeIdx + 1, sum + node[0], ways * choose(node[1], node[2]))
            });
        }
    }

    if (!graph[0]) {
        return result;
    }

    graph[0].forEach((node) => {
        dfs(0, node[0], choose(node[1], node[2]))
    });

    return result;
};

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function choose(n, r) {
    return factorial(n) / (factorial(n - r) * factorial(r))
}

// Can we do better?
// Time complexity is O(2^n) even though we removed duplicates
// How can we vistit a node exactly once?
// How can we find a result we need without traversing
module.exports = {findTargetSumWays, factorial};