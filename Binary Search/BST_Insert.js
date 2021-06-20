class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;      
    }

    /*
INSERTING A NODE
Steps - Iteratively or Recursively

-Create a new node
-Starting at the root
    -Check if there is a root, if not - the root now becomes that new node!
    -If there is a root, check if the value of the new node is greater than or less than the value of the root
    -If it is greater
        -Check to see if there is a node to the right
        -If there is, move to that node and repeat these steps
        -If there is not, add that node as the right property
-If it is less
    -Check to see if there is a node to the left
        -If there is, move to that node and repeat these steps
        -If there is not, add that node as the left property
*/
    insert(value){
        var newNode = new Node(value);
        if(!this.root){
            this.root = newNode
            return this;
        } else {
            var current = this.root;
            while(true){
                if(value === current.value) return undefined
                if(value < current.value){
                    if(!current.left){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left
                    }
                } else if (value > current.value){
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    /* 
    Finding a Node in a BST
Steps - Iteratively or Recursively

-Starting at the root
    -Check if there is a root, if not - we're done searching!
    -If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
    -If not, check to see if the value is greater than or less than the value of the root
    -If it is greater
        -Check to see if there is a node to the right
        -If there is, move to that node and repeat these steps
        -If there is not, we're done searching!
-If it is less
    -Check to see if there is a node to the left
    -If there is, move to that node and repeat these steps
    -If there is not, we're done searching!
    */
    find(value){   
        if(!this.root) return undefined
        if(this.root.value === value){
            return true
        } else{
            var current = this.root;
            while(true){
                if(value > current.value){
                    if (!current.right) {
                        return false
                    }
                    else {
                        current = current.right             
                    }
                } else if (value < current.value){
                    if (!current.left) {
                        return false
                    }
                    else {
                        current = current.left          
                    }
                } else{
                    return true
                }
            }
        }
    }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(7)
tree.insert(14)
tree.insert(2)
console.log(tree.find(1))


