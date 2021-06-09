class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;  
    }
/* 
Pushing pseudocode

-Create a new node with the value passed to the function
-If the head property is null set the head and tail to be the newly created node
-If not, set the next property on the tail to be that node
-Set the previous property on the newly created node to be the tail
-Set the tail to be the newly created node
-Increment the length
-Return the Doubly Linked List

*/
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;           
        }
        this.length++;
        return this;
    }

    /*
Popping pseudocode
-If there is no head, return undefined
-Store the current tail in a variable to return later
-If the length is 1, set the head and tail to be null
-Update the tail to be the previous Node.
-Set the newTail's next to null
-Decrement the length
-Return the value removed
*/

    pop(){
        if(!this.head) return undefined;
        var removedTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;//removedTail.prev
            this.tail.next = null;
            removedTail.prev = null; //to severe previous connections
        }
        this.length--;
        return removedTail;
    }
/* 
Shifting pseudocode
Let's visualize this!

-If length is 0, return undefined
-Store the current head property in a variable (we'll call it old head)
-If the length is one
-set the head to be null
-set the tail to be null
-Update the head to be the next of the old head
-Set the head's prev property to null
-Set the old head's next to null
-Decrement the length
-Return old head
*/
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.lenght === 1){
            this.head === null;
            this.tail === null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        
        this.length--;
        return oldHead;
        
    }
}

