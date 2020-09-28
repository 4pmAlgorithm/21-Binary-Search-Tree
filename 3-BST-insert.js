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
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){//if there's root
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return "value exists";
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree)