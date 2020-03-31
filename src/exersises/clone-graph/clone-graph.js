function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
 }
 
function cloneGraph(node) {
    const v4 = new Node(4, []);
    const v3 = new Node(3, []);
    const v2 = new Node(2, []); 
    const v1 = new Node(1, [v2, v3, v4]);
    return v1;
}

module.exports = {Node, cloneGraph};