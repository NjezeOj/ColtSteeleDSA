function bubbleSort(arr){
    const swap = (arr,idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    let noSwaps;
    for(let i = arr.length-1; i>=0; i--){
        noSwaps = true; //optimized
        for(let j = 0; j<=i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j, j+1);
                noSwaps = false; //optimized
            }
        }
        if(noSwaps) break; //optimized
    }
    return arr;
}

console.log(bubbleSort([5,3,4,1,2]))