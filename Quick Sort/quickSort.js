const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivotHelper(arr, i , end) {

    let pivot = i

    for (let j = i + 1; j <= end; j++) {
        if (arr[i] > arr[j]) {
            swap(arr, j, pivot + 1)
            pivot++
        }
    }
    swap(arr, pivot, i)
    return pivot
}

function quickSort(arr, left = 0, right = arr.length - 1 ){
    if(left < right){
        let pivot = pivotHelper(arr, left, right)
        //left
        quickSort(arr, left, pivot - 1)
        //right
        quickSort(arr, pivot + 1, right)
    }
    
    return arr
}

console.log(quickSort([4,6,9,1,2,5]))