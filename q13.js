function findLargest(array){
    let max = 0;
    for(let i=0; i<array.length;i++){
        if(max<array[i]){
            max=array[i]
        }
    }
    return max;
}

let rv = findLargest([3,5,1,8,2])
console.log(rv);