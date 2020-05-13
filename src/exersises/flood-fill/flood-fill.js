/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const que = [[sr, sc]];
    const color = image[sr][sc];

    if (color === newColor) {
        return image;
    }

    while(que.length > 0) {
        let level = que.length;
        for(let i = 0; i < level; i++) {
            const [r, c] = que.shift();
            
            image[r][c] = newColor;
            if (image[r - 1] !== undefined && image[r - 1][c] === color) {
                que.push([r-1, c])
            }
            if (image[r + 1] !== undefined && image[r + 1][c] === color) {
                que.push([r+1, c])
            }
            if (image[r][c + 1] === color) {
                que.push([r, c + 1])
            }
            if (image[r][c - 1] === color) {
                que.push([r, c - 1])
            }
        }
    }
    return image;
};

module.exports = floodFill;