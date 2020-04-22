function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/* function dfs(node) {
    if (node.left) {
        dfs(node.left);
    }

    result.push(node.val);

    if (node.right) {
        dfs(node.right);
    }
}

dfs(root); */


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = [];

    if (root === null) {
        return result;
    }

    var stack = [root];
    var visited = new Set();

    while (stack.length > 0) {
        var cur = stack.pop();
        visited.add(cur);

        if (cur.left && !visited.has(cur.left)) {
            stack.push(cur);
            stack.push(cur.left);  
        } else {
            result.push(cur.val);

            if (cur.right) {
                stack.push(cur.right)
            }
        }
    }

    return result;
};

/**
 * TODO
 * implement custom stack
 */
module.exports = {inorderTraversal, TreeNode};