/*function BinarySearch(arr, num){

    //my method takes too much time
    if (arr.length === 0) {
        return -1;
    }

    let left = 0;
    let right = arr.length-1;
    let middle = (left + right)/2;

    if(num === arr[0]){
        middle = 0;
    }

    else if (num > arr[arr.length - 1] || num < arr[0]){
        middle = -1;
    }

    
    while (arr[middle] !== num) {
        if (num > arr[middle]) {
            left = middle;
            middle = Math.ceil((left + right) / 2);
            
        }

        else {
            right = middle;
            middle = Math.ceil((left + right) / 2);
        }
    }
    
    

    return middle;
    
}*/

function binarySearch(arr, n) {
    if (arr.length === 0) {
        return -1;
    }

    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (arr[middle] !== n && left <= right) {
        if (n < arr[middle]) {
            right = middle - 1;
        } 
        else{
            left = middle + 1;
        }

        middle = Math.floor((left + right) / 2);
        console.log(middle)
    }

    return arr[middle] === n ? middle : -1
}

console.log(binarySearch([1,2,3,4,5,6], 4));