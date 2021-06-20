class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (!this.root) {
            this.root = newNode
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value === current.value) return undefined
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
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

    
    find(value) {
        if (!this.root) return undefined
        if (this.root.value === value) {
            return true
        } else {
            var current = this.root;
            while (true) {
                if (value > current.value) {
                    if (!current.right) {
                        return false
                    }
                    else {
                        current = current.right
                    }
                } else if (value < current.value) {
                    if (!current.left) {
                        return false
                    }
                    else {
                        current = current.left
                    }
                } else {
                    return true
                }
            }
        }
    }
    /*
                BFS
        Steps - Iteratively
    
    -Create a queue (this can be an array) and a variable to store the values of nodes visited
    -Place the root node in the queue
    -Loop as long as there is anything in the queue
        -Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        -If there is a left property on the node dequeued - add it to the queue
        -If there is a right property on the node dequeued - add it to the queue
    -Return the variable that stores the values
    
    */ 
    BFS(){
        var node = this.root,
        queue = [],
        data = []
 
        queue.push(node)
        while(queue.length){
            node = queue.shift()
            data.push(node.value)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }

    /* 
    DFS - PreOrder
-Create a variable to store the values of nodes visited
-Store the root of the BST in a variable called current
-Write a helper function which accepts a node
    -Push the value of the node to the variable that stores the values
    -If the node has a left property, call the helper function with the left property on the node
    -If the node has a right property, call the helper function with the right property on the node
-Invoke the helper function with the current variable
-Return the array of values
    */
    DFSPreOrder(){
       var data = [],
       current = this.root
 
       function traverse(node) {
           data.push(node.value)
           if (node.left) traverse(node.left)
           if (node.right) traverse(node.right)
       }
       traverse(current)
       return data
   }

    /*
     DFS - PostOrder
 -Create a variable to store the values of nodes visited
 -Store the root of the BST in a variable called current
 -Write a helper function which accepts a node
    -If the node has a left property, call the helper function with the left property on the node
    -If the node has a right property, call the helper function with the right property on the node
    -Push the value of the node to the variable that stores the values
    -Invoke the helper function with the current variable
 -Return the array of values
     */
    DFSPostOrder() {
        var data = [],
            current = this.root

        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(current)
        return data
    }

    /* 
    DFS - InOrder
-Create a variable to store the values of nodes visited
-Store the root of the BST in a variable called current
-Write a helper function which accepts a node
    -If the node has a left property, call the helper function with the left property on the node
    -Push the value of the node to the variable that stores the values
    -If the node has a right property, call the helper function with the right property on the node
-Invoke the helper function with the current variable
-Return the array of values
    */
    DFSInOrder() {
        var data = [],
            current = this.root

        function traverse(node) {
            if (node.left) traverse(node.left)
            data.push(node.value)
            if (node.right) traverse(node.right)
            
        }
        traverse(current)
        return data
    }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(7)
tree.insert(14)
tree.insert(2)
console.log(tree.find(1))


