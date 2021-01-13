/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function(tree) {
    const visited = new Set();
    const notReachable = new Set(tree);

    function visitTree(root) {
        if (visited.has(root)) {
            return;
        } else {
            visited.add(root);
        }

        for (let child of root.children) {
            notReachable.delete(child);
            visitTree(child);
        }
    }

    for (let node of tree) {
        visitTree(node);
    }

    return notReachable.values().next().value;
};

module.exports = findRoot;
