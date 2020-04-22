const {TreeNode, inorderTraversal} = require('./binary-tree-inorder-traversal');

describe('inorderTraversal', () => {
    it('case 0', () => {
        const root = new TreeNode(1);
        const l1Right = new TreeNode(2);
        const l2Left = new TreeNode(3);

        root.right = l1Right;
        l1Right.left = l2Left;

        expect(inorderTraversal(root)).toEqual([1, 3, 2]);
    });

    it('case 1', () => {
        const root = new TreeNode(1);
        const l1Left = new TreeNode(2);
        const l1Right = new TreeNode(3);

        root.right = l1Right;
        root.left = l1Left;

        expect(inorderTraversal(root)).toEqual([2, 1, 3]);
    });
});