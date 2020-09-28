// binary search tree BST
//1. children nodes are always 2 or less
//2. left child is less than the parent node.
//3. child on the right is always greater than the parent.

class Node {
    constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.right = new Node(15);
tree.root.left.right = new Node(9)
