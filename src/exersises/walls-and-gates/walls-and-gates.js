/* You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example: 

Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF

After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4 */

var INF = 2147483647;
var GATE = 0;

function getUnvisitedNeighbors(rooms, rowIdx, colIdx) {
    const neighbors = [];
    // top
    if (rooms[rowIdx - 1] && rooms[rowIdx - 1][colIdx] === INF) {
        neighbors.push([rowIdx - 1, colIdx]);
    }
    // right
    if (rooms[rowIdx][colIdx + 1] === INF) {
        neighbors.push([rowIdx, colIdx + 1]);
    }

    // bottom
    if (rooms[rowIdx + 1] && rooms[rowIdx + 1][colIdx] === INF) {
        neighbors.push([rowIdx + 1, colIdx]);
    }

    // left
    if (rooms[rowIdx][colIdx - 1] === INF) {
        neighbors.push([rowIdx, colIdx - 1]);
    }
    return neighbors;
}

/**
 * O(m*n)
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms) {
    let step = 0;
    const que = [];
    rooms.forEach((row, rowIdx) => {
        row.forEach((col, colIdx) => {
            if (col === GATE) {
                const neighbors = getUnvisitedNeighbors(rooms, rowIdx, colIdx);
                neighbors.forEach(neighbor => {
                    que.push(neighbor);
                })
            }
        });
    });

    while(que.length !== 0) {
        step += 1;
        let size = que.length;
        for(let i = 0; i < size; i++) {
            const room = que.shift();
            const [rowIdx, colIdx] = room;
            if (rooms[rowIdx][colIdx] === INF) {
                rooms[rowIdx][colIdx] = step;
                const neighbors = getUnvisitedNeighbors(rooms, rowIdx, colIdx);
                neighbors.forEach(neighbor => {
                    que.push(neighbor);
                });
            }
        }
    }
}

module.exports = wallsAndGates;