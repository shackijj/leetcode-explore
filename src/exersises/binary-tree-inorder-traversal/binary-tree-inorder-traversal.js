function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = [];

    function dfs(node) {
        if (node.left) {
            dfs(node.left);
        }

        result.push(node.val);

        if (node.right) {
            dfs(node.right);
        }
    }

    dfs(root);

    return result;
};

/**
 * TODO
 * implement custom stack
 */
module.exports = {inorderTraversal, TreeNode};