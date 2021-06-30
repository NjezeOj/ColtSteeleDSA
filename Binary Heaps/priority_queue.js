const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
class Node{
    constructor(val, priority){
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    bubbleup() {
        var index = this.values.length - 1
        var parentIndex = Math.floor((index - 1) / 2)

        while (this.values[parentIndex].priority < this.values[index].priority) {
            swap(this.values, index, parentIndex)
            index = parentIndex //swap here because you want to check if the parentIndex is gretaer than or less than the index for the loop to continue
            parentIndex = Math.floor((index - 1) / 2)
        }
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleup();
        
        
    }

    dequeue() {
        //EDGE CASE COME BACK TO THIS!!!
        const max = this.values[0]
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = (idx * 2) + 1;
            let rightChildIdx = (idx * 2) + 2;
            let leftChild, rightChild;
            let swap = null

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild).priority
                ) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }

}

var ER= new PriorityQueue();

ER.enqueue("common cold", 1)
ER.enqueue("gunshot wound", 5)
ER.enqueue("high fever", 2)

console.log(ER.values);

