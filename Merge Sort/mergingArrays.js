function mergingArrays(arr1, arr2){
    let arr3 = []
    let i = 0;
    let j = 0;

    while(i <= arr1.length-1 && j <= arr2.length-1){
        if (arr1[i] <= arr2[j]) {
            arr3.push(arr1[i])
            i++
        }

        if (arr2[j] <= arr1[i]){
            arr3.push(arr2[j])
            j++
        }
    } 

    while (j < arr2.length){
        arr3.push(arr2[j])
        j++
    }

    while ( i < arr1.length) {
        arr3.push(arr1[i])
        i++
    }
    
    return arr3;
}
//Colt recommends using a while loop
//console.log(mergingArrays([1, 10, 50], [2, 14, 99, 100])) //NOTE: SORTED ARRAYS
//console.log(mergingArrays([100], [1,2,3,5,6]))
console.log(mergingArrays([1,2,3,67], [45,56]))

/* 

    while(i>arr1.length-1 && i <= arr2.length){
        arr3.push(arr2[i-1])
        i++
    }
     */