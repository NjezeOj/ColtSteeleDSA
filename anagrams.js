function validAnagram(str1, str2){
    //check the count of each string
    if(str1.length !== str2.length){
        return false
    }
    //convert string to lowercase
    let l_str1 = str1.toLowerCase()
    let l_str2 = str2.toLowerCase()
    //convert string to array
    let arr1 = [...l_str1]
    let arr2 = [...l_str2]
    //create frequencycounter object
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //loop through array and create a property representing each number of the 
    //array which will have their count increased if the property already exists
    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }            
    }

    return true;
}

console.log(validAnagram('rat','car'))