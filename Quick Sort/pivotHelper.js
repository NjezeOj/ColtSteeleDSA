const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivotHelper(arr, i = 0, end = arr.length - 1){
    
    let pivot = 0 
    
    for(let j = i + 1; j <= arr.length-1; j++){
        if(arr[i] > arr[j]){   
            swap(arr, j, pivot+1) 
            pivot++ 
        }
    }
    swap(arr, pivot, i)
    return pivot
}

console.log(pivotHelper([28,41,4,11,16,1,40,14,36,37,42,18]))
//28,4,11,16,1,40