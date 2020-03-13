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
var WALL = -1;
var GATE = 0;

function Node(value, row, column) {
    this.value = value;
    this.row = row;
    this.column = column
    this.neighbors = [];
}

function getNeighbors(node, grid) {
    const neighbors = [];
    if (node.row > 0) {
        neighbors.push(grid[node.row - 1][node.column]);
    }

    if (node.row < grid.length - 1) {
        neighbors.push(grid[node.row + 1][node.column]);
    }

    if (node.column > 0) {
        neighbors.push(grid[node.row][node.column - 1])
    }

    if (node.column < grid[0].length - 1) {
        neighbors.push(grid[node.row][node.column + 1])
    }


    return neighbors;
}

/**
 * @param {number[][]} rooms
 * @return {[Nodes[], Node[]]}
 */
function createGraph(rooms) {
    // map grid to Node[][]
    const nodes = rooms.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => new Node(cell, rowIndex, cellIndex))
    })
    const listOfRooms = [];
    const listOfNodes = [];

    nodes.forEach((row) => {
        row.forEach((node) => {
            if (node.value !== WALL) {
                listOfNodes.push(node);
                node.neighbors = getNeighbors(node, nodes);
            }
            if (node.value === INF) {
                listOfRooms.push(node);
            }
        });
    });
    return listOfRooms;
}

/**
 * @param {Node[]} nodes
 * @param {Node[]} room
 */
function findDistanceToGate(room) {
    const queue = [room];
    let step = 0;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const cur = queue[0];
            if (cur.value === GATE) {
                return step;
            }
            cur.neighbors.forEach((node) => {
                queue.push(node)
            });
            queue.shift();
        }
        step += 1;
    }

    return INF;
}

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms) {
    // create the graph
    const emptyRooms = createGraph(rooms);
    // for every room
    emptyRooms.forEach((room) => {
        // find shortest path to the nearest gate
        const distanceToGate = findDistanceToGate(room);
        // modify value in array
        rooms[room.row][room.column] = distanceToGate;
    });
    console.log(rooms);
}

module.exports = wallsAndGates;