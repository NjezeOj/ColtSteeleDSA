function merge(arr1, arr2) {
    let arr3 = []
    let i = 0;
    let j = 0;

    while (i <= arr1.length - 1 && j <= arr2.length - 1) {
        if (arr1[i] <= arr2[j]) {
            arr3.push(arr1[i])
            i++
        }

        if (arr2[j] <= arr1[i]) {
            arr3.push(arr2[j])
            j++
        }
    }

    while (j < arr2.length) {
        arr3.push(arr2[j])
        j++
    }

    while (i < arr1.length) {
        arr3.push(arr1[i])
        i++
    }

    return arr3;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));

    return merge(left, right);
}


console.log(mergeSort([10,24,76,73]))