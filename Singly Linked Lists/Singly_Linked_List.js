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
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }       
        this.length++;
        return this;
    }


    /* 
    Get pseudocode

-This function should accept an index
-If the index is less than zero or greater than or equal to the length of the list, return null
-Loop through the list until you reach the index and return the node at that specific index
    */
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter != index){
            current = current.next;
            counter++;
        }
        return current;

    }

    /* 
    Set pseudocode


-This function should accept a value and an index
-Use your get function to find the specific node.
-If the node is not found, return false
-If the node is found, set the value of that node to be the value passed to the function and return true
    */

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        } 
        return false;
    }
   
    /* 
    Insert pseudocode
Let's visualize this!

-If the index is less than zero or greater than the length, return false
-If the index is the same as the length, push a new node to the end of the list
-If the index is 0, unshift a new node to the start of the list
-Otherwise, using the get method, access the node at the index - 1
-Set the next property on that node to be the new node
-Set the next property on the new node to be the previous next
-Increment the length
-Return true
    */
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val); //returns true
        if(index === 0) return !!this.unshift(val); //returns true

        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next; //temp is used to store prev.next because if 
        //we dont and change prev.next, 
        //the value will be deleted
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;

    }

    /* 
    Remove pseudocode
Let's visualize this!

-If the index is less than zero or greater than the length, return undefined
-If the index is the same as the length-1, pop
-If the index is 0, shift
-Otherwise, using the get method, access the node at the index - 1
-Set the next property on that node to be the next of the next node
-Decrement the length
-Return the value of the node removed
    */
    remove(index){
        if (index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length -1) return this.pop();

        var previousNode = this.get(index-1);
        var removed = previousNode.next;
        previousNode.next = removed.next;

        return removed;
    }
}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("there");
list.push("!");
console.log(list);


/* list.push("Goodbye"); */

//to push the final commit put the methods