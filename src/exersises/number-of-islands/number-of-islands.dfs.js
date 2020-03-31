function DFS(rooms, r, c, rowLen, colLen) {
    rooms[r][c] = '0';

    if (r < rowLen - 1 && rooms[r + 1][c] === '1') {
        DFS(rooms, r + 1, c, rowLen, colLen);
    }
    if (r > 0 && rooms[r - 1][c] === '1') {
        DFS(rooms, r - 1, c, rowLen, colLen);
    }
    if (c > 0 && rooms[r][c - 1] === '1') {
        DFS(rooms, r, c - 1, rowLen, colLen);
    }
    if (c < colLen - 1 && rooms[r][c + 1] === '1') {
        DFS(rooms, r, c + 1, rowLen, colLen);
    }
}

// O(m * n)
// Call stack size (m * n) - it's bad
function numIslands(rooms) {
    let num = 0;
    let rowLen = rooms.length;
    let colLen = rooms[0].length;
    for (let r = 0; r < rowLen; r++) {
        for (let c = 0; c < colLen; c++) {
            if (rooms[r][c] === '1') {
                num += 1;
                DFS(rooms, r, c, rowLen, colLen);
            }
        }
    }
    return num;
}

// Can we do better?
// - Use internal stack
module.exports = numIslands;