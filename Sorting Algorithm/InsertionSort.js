function insertionSort(arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for(let i = 1; i < arr.length; i++){
        for (let j = 0; j < i; j++){
            if(arr[i] <= arr[j]){
                swap(arr,i,j);
            }
        }
    }

    return arr  //[1,1,4,9,76]
}

console.log(insertionSort([1,1,9,76,4]))