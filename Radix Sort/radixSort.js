function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits
}

function radixSort(num){
    //Step1: get the length of the longest number
    let longestNum = mostDigits(num);
    //Step2: loop through with reference to the longest number
    for(let k = 0; k < longestNum; k++){
        //step3: Create buckets for the numbers, which is an array from 0-9 representing
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < num.length; i++){
            //step4: get the number based on the index 
            let digit = getDigit(num[i], k) // (23, k = 0) returns 3
            //step5: with regards to the digit push a value from num
            digitBuckets[digit].push(num[i]) //pushes num[0]=23 into digitBuckets[3]
        }
        
        num = [].concat(...digitBuckets);
    }
    return num;
}

console.log(radixSort([23,345,5467,12,2345,9852]))