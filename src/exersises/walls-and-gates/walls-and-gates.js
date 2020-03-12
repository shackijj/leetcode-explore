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

/**
 * @param {number[][]} rooms
 * @return {[Nodes[], Node[]]}
 */
function createGraph() {
    // map grid to Node[][]
    const nodes = rooms.map((row) => {
        return row.map((cell) => createNode(cell))
    })
    const listOfNodes = [];
    const listOfRooms = [];
    nodes.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {

        });
    });
    // for each node 
        // add neighbors
        // put emprty rooms in a separate array
        // put node into an arry
    // return array of nodes and array of empty rooms
}

/**
 * @param {Node[]} nodes
 * @param {Node[]} room
 */
function findDistanceToGate() {
    // Use BFS to find shortest distance to a gate
}

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms) {
    // create the graph
    const [nodes, emptyRooms] = createGraph(rooms);
    // for every room
    emptyRooms.forEach((room) => {
        // find shortest path to the nearest gate
        const distanceToGate = findDistanceToGate(nodes, room);
        // modify value in array
        rooms[room.row][room.col] = distanceToGate;
    });
}

module.exports = wallsAndGates;