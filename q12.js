function removeDuplicates(array){
    
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]==array[j]){
                array.splice(j,1)
            }
        }
    }
    return array
    
}
let array = [1,2,3,1,2,4]
let rv = removeDuplicates(array)
console.log(rv);
