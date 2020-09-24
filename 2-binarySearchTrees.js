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


//inserting a node
// 1. create a new node
// 2. starting at the root
//  2-1 check if there is a root, if not the root now become that new node 
//  2-2 if there is a root, check if the value of the new node is greater than or less than the value of the root 
//  2-3 if it is greater 
//     -check to see if there is a node to the right
//         -if there is, move to that node and repeat these steps.
//         -if there is not, add that node as the right property.
// 2-4 if it is less 
//     - check to see if there is a node to the left 
//         - if there is, move to that node and repeat these steps 
//         - if there is not, add that node as the left property 



//        10
//    5       13
//  2   6   11  16
