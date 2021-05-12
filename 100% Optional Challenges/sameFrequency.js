function sameFrequency(num1, num2) {
    let a = num1.toString();
    let b = num2.toString();

    if (a.length !== b.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};



    let arr1 = [...a];
    let arr2 = [...b];

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;
}


console.log(sameFrequency(158, 851));