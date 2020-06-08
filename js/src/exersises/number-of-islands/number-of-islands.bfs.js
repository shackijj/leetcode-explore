// O(mn)
// iterate the grid
    // if node is not visited start BFS
    // O(mn)
    // mark node as visited
    // add neighbors
    // once stack is empty increas islands count

function numIslands(rows) {
    let count = 0;
    rows.forEach((row, rowIdx) => {
        row.forEach((col, colIdx) => {
            if (col === '0') {
                return;
            }

            let queue = [[rowIdx, colIdx]];
            while(queue.length !== 0) {
                let size = queue.length;

                for(let i = 0; i < size; i++) {
                    const cur = queue.shift();
                    const [curRowIdx, curColIdx] = cur;
                    if (rows[curRowIdx][curColIdx] === '0') {
                        continue;
                    }
                    rows[curRowIdx][curColIdx] = '0';

                    // top
                    if (curRowIdx > 0) {
                        queue.push([curRowIdx - 1, curColIdx]);
                    }

                    // right
                    if (curColIdx < rows[0].length - 1) {
                        queue.push([curRowIdx, curColIdx + 1]);
                    }

                    // bottom
                    if (curRowIdx < rows.length - 1) {
                        queue.push([curRowIdx + 1, curColIdx]);
                    }

                    // left
                    if (curColIdx > 0) {
                        queue.push([curRowIdx, curColIdx - 1]);
                    }
                }
            }
            count += 1;
        });
    });

    return count;
}

module.exports = numIslands;
