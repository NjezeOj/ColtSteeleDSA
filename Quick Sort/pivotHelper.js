const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

////PIVOT HELPER STARTING FROM 0////////////
function pivotHelper(arr, i = 0, end = arr.length - 1){
    
    let pivot = 0 //pivot keeps count of the indexes between start and end, 
                //the count of numbers between start and end can also be taken note of 
    
    for (let j = i + 1; j <= end; j++) {        //j = arr.length - 1
        if(arr[i] > arr[j]){   
            swap(arr, j, pivot+1) 
            pivot++ 
        }
    }
    swap(arr, pivot, i)
    return pivot
}

console.log(pivotHelper([1,2,4,6,5,9]))
//28,4,11,16,1,40

////GENERAL FORM FOR PIVOT HELPER///////
/* function pivotHelper(arr, i, end) {

    let pivot = i

    for (let j = i + 1; j <= end; j++) {        //j <= arr.length - 1
        if (arr[i] > arr[j]) {
            swap(arr, j, pivot + 1)
            pivot++
        }
    }
    swap(arr, pivot, i)
    return pivot
}

console.log(pivotHelper([1, 2, 4, 6, 5, 9], 3, 5)) */