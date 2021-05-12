function minSubArrayLen(arr, sum){
    if(arr.length === 0){
        return 0;
    }

    for (let i = 0; i<arr.length; arr++){
        let sumArray = 0; Arr1=[]; let b = i;
        if(sumArray >= sum){
            sumArray += arr[i] 
            if(arr1.length === 0){
                arr1 = arr.slice()
            }
        }


    }
    return arr1;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))
console.log(minSubArrayLen([1,4,6,22,5,7,8,9,10], 39))