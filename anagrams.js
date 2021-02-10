function validAnagram(str1, str2){
    //check the count of each string
    if(str1.length !== str2.length){
        return false
    }
    //convert string to lowercase
    let l_str1 = str1.toLowerCase()
    let l_str2 = str2.toLowerCase()
    //create frequencycounter object
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //loop through array and create a property representing each number of the 
    //array which will have their count increased if the property already exists
    for (let val of l_str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of l_str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    //for loop which compares each key in seperate objects and
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

console.log(validAnagram('rac','car'))