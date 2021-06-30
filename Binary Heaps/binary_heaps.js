/* 
    INSERT PSEUDOCODE
-Push the value into the values property on the heap
-Bubble Up:
    -Create a variable called index which is the length of the values property - 1
    -Create a variable called parentIndex which is the floor of (index-1)/2
    -Keep looping as long as the values element at the parentIndex is less than the values element at the child index
        -Swap the value of the values element at the parentIndex with the value of the element property at the child index
        -Set the index to be the parentIndex, and start over!
*/
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

class MaxBinaryHeap{    
    constructor(){
        this.values = []
    }

    bubbleup(){
        var index = this.values.length - 1
        var parentIndex = Math.floor((index - 1) / 2)

        while (this.values[parentIndex] < this.values[index]) {
            swap(this.values, index, parentIndex)
            index = parentIndex //swap here because you want to check if the parentIndex is gretaer than or less than the index for the loop to continue
            parentIndex = Math.floor((index - 1) / 2)
        }
    }

    insert(value){ 
        this.values.push(value)
        this.bubbleup();
    }

    /* 
    REMOVING(also called extractMax)
-Swap the first value in the values property with the last one
-Pop from the values property, so you can return the value at the end.
-Have the new root "sink down" to the correct spot...
    -Your parent index starts at 0 (the root)
    -Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
    -Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
    -If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
    -The child index you swapped to now becomes the new parent index.
    -Keep looping and swapping until neither child is larger than the element.
    -Return the old root!
    */
    extractMax(){
        //EDGE CASE COME BACK TO THIS!!!
        const max = this.values[0]
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }    
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = (idx * 2) + 1;
            let rightChildIdx = (idx * 2) + 2;
            let leftChild, rightChild;
            let swap = null

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild > element){
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIdx
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}

var heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.extractMax()
console.log(heap.values);

