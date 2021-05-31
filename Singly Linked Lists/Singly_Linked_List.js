//STEP1 - Start by defining a class for each node
//Node stores a piece of data - val
//Reference to the next node - Next

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}// this constructor is what we need for our node

/* var first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how"); */

//At the first node there is a refernece to the next node.
//The above is a bad way to create a linked list



class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /*
Pushing pseudocode

-This function should accept a value
-Create a new node using the value passed to the function
-If there is no head property on the list, set the head and tail to be the newly created node
-Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
-Increment the length by one
-Return the linked list
*/
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this; //this is done to return the linked list;
    } 

    /* 
    Popping pseudocode
Let's visualize this!

-If there are no nodes in the list, return undefined
-Loop through the list until you reach the tail
-Set the next property of the 2nd to last node to be null
-Set the tail to be the 2nd to last node
-Decrement the length of the list by 1
-Return the value of the node removed
    */

    pop(){
        if(!this.head) return undefined; 
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next; 
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    /* 
    Shifting pseudocode
Let's visualize this!

-If there are no nodes, return undefined
-Store the current head property in a variable
-Set the head property to be the current head's next property
-Decrement the length by 1
-Return the value of the node removed
    */
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length == 0) {
            this.tail = null;
        }
        return currentHead; //this is what was taken off
    }


    /* 
    Unshifting pseudocode

-This function should accept a value
-Create a new node using the value passed to the function
-If there is no head property on the list, set the head and tail to be the newly created node
-Otherwise set the newly created node's next property to be the current head property on the list
-Set the head property on the list to be that newly created node
-Increment the length of the list by 1
-Return the linked list
    */
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newValue;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }       
        this.length++;
        return this;
    }

}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("there");
list.push("!");
console.log(list);
console.log(list.pop());
console.log(list);

/* list.push("Goodbye"); */