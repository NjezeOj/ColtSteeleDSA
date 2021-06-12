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

    /* 
    Unshifting pseudocode
-Create a new node with the value passed to the function
-If the length is 0
    -Set the head to be the new node
    -Set the tail to be the new node
-Otherwise
    -Set the prev property on the head of the list to be the new node
    -Set the next property on the new node to be the head property
    -Update the head to be the new node
-Increment the length
-Return the list
    */
    unshift(val) {
        var newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /* 
    Get Pseudocode
Let's visualize this!

-If the index is less than 0 or greater or equal to the length, return null
-If the index is less than or equal to half the length of the list
    -Loop through the list starting from the head and loop towards the middle
    -Return the node once it is found
-If the index is greater than half the length of the list
    ​-Loop through the list starting from the tail and loop towards the middle
    -Return the node once it is found
 */

    get(index){
        if(index < 0 || index >= this.length) return null
        var current = this.head;
        var end = this.tail;
        var count = 0;
        var countEnd = this.length - 1;
        if (index <= Math.floor(this.length / 2)){
            while (count != index){
                current = current.next;
                count++;
            }
            return current;
        } else {
            while (countEnd != index) {
                end = end.prev;
                countEnd--;
            }
            return end;
        }
    }

    /* 
    Set pseudocode
Let's visualize this!

-Create a variable which is the result of the get method at the index passed to the function
    -If the get method returns a valid node, set the value of that node to be the value passed to the function
    -Return true
Otherwise, return false
    */
    set(index, value) {
        var existingNode = this.get(index);

        if (existingNode != null) {
            existingNode.val = value
            return true;
        } else {
            return false;
        }
    }

    /* 
    Insert pseudocode
-If the index is less than zero or greater than or equal to the length return false
-If the index is 0, unshift
-If the index is the same as the length, push
-Use the get method to access the index -1
-Set the next and prev properties on the correct nodes to link everything together
-Increment the length
-Return true
    */
    insert(index, value){
        if(index < 0 || index >= this.length) return false
        if(index === 0) return this.unshift(value)
        if(index === this.length) return this.push(value)

        var previousNode = this.get(index-1)
        var nextNode = this.get(index)//previousNode.next
        var newNode = new Node(value)

        previousNode.next = newNode;
        newNode.prev = previousNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        
        
        this.length++
        return true
        
    }

    /* 
    Remove pseudocode

-If the index is less than zero or greater than or equal to the length return undefined
-If the index is 0, shift
-If the index is the same as the length-1, pop
-Use the get method to retrieve the item to be removed
-Update the next and prev properties to remove the found node from the list
-Set next and prev to null on the found node
-Decrement the length      
-Return the removed node.
    */

    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift(index)
        if(index === this.length-1) return this.pop()

        
        var removedNode = this.get(index);
        var previousNode = removedNode.prev;
        var nextNode = removedNode.next;
        

        previousNode.next = removedNode.next;
        nextNode.prev = removedNode.prev;

        removedNode.next = null; //these steps are taken to severe the connections of this node
        removedNode.prev = null;

        this.length--;
        return removedNode;


    }
}


var list = new DoublyLinkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)

//console.log(list);
//list.insert(2,100)
list.remove(2);
console.log(list.get(2));

