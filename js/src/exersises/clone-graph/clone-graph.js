function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

function DFS(node, map) {
    const copy = new Node(node.val);
    map.set(node, copy);

    node.neighbors.forEach((n) => {
        const visited = map.get(n);
        if (!visited) {
            nCopy = DFS(n, map, copy);
            copy.neighbors.push(nCopy);
        } else {
            copy.neighbors.push(visited);
        }
    });
    return copy;
}

function cloneGraph(node) {
    if (node === null) {
        return null;
    }
    const map = new Map();
    DFS(node, map);
    return map.get(node);
}

module.exports = {Node, cloneGraph};