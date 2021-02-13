function countUniqueValues(arr){
    /*if(arr.length === 0){
        return 0;
    }
    let i = 0    
    for(let j=1; j<arr.length;j++){
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
 
    return i+1;*/
    
    //using frequency counter to count unique values
    /*let frequencyCounter = {}
    let sum = 0
    for(let val of arr){
        frequencyCounter[val] = 1
    }
    
    for(let key in frequencyCounter){
        sum += frequencyCounter[key]
    }

    return sum*/

    if (arr.length === 0) {
        return 0;
    }
    let i = 0
    arr1 = []
    arr1.push(arr[0])
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j] ){            
            arr1.push(arr[j])            
        }
        i++
    }
    
    return arr1.length
}

console.log(countUniqueValues([1,2,3]))