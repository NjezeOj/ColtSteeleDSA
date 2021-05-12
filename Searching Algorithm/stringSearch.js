function stringSearch(long, short){

    let count = 0
    

    for(let i = 0; i<long.length; i++){
        for(let j = 0; j < short.length; j++){
            if (short[j] !== long[i+j]){
                break;
                
            } if (j === short.length-1) {
                console.log(long[i+j], short[j])
                count++
            }
                       
            //console.log(long[i+j] )
        }
    }
    return count
}

console.log(stringSearch("lorie loled", "lol"))