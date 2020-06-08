function DFS(rooms, row, col, rowLen, colLen) {
    const stack = [];
    stack.push([row, col]);

    while (stack.length > 0) {
        const [r, c] = stack[stack.length - 1];
        rooms[r][c] = '0';

        if (r < rowLen - 1 && rooms[r + 1][c] === '1') {
            stack.push([r + 1, c]);
            continue;
        }
        if (r > 0 && rooms[r - 1][c] === '1') {
            stack.push([r - 1, c]);
            continue;
        }
        if (c > 0 && rooms[r][c - 1] === '1') {
            stack.push([r, c - 1]);
            continue;
        }
        if (c < colLen - 1 && rooms[r][c + 1] === '1') {
            stack.push([r, c + 1]);
            continue;
        }
        stack.pop();
    }
}

// Time O(m * n)
// Memory (m * n)
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

module.exports = numIslands;