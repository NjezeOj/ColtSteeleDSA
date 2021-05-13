function selectionSort(arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
  
    for(let i = 0; i < arr.length-1; i++){
        let min = arr[i]
        let k
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] <= min){
                min = arr[j]
                k = j
            }
        }
        swap(arr, i, k)
    }

    return arr


    //Colt's method
    /* for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] <= arr[min]) {
                min = j
            }
        }
        if(i !== min) swap(arr, i, k);
    } */
}

console.log(selectionSort([5, 3, 1, 1, 2])) //[1,2,3,4,5]

/*
let arr = [5, 3, 4, 1, 2];

const swap = (arr, idx1, min) => {
    [arr[idx1], min] = [min, arr[idx1]];
    return arr
}
console.log(swap(arr, 0, 1))*/
