function sortArray(array){
    let array2 = [];
    let max = 0;
    for(let i=0; i<array.length;i++){
        if(max<array[i]){
            max=array[i]
        }
    }

    while(array.length > 0){
        let min = max;
        for(let k=0;k<array.length;k++){
            if(min>array[k]){
                min=array[k]
            }
        }    
        array2.push(min);
        array.splice(array.indexOf(min),1)
    }
    return array2
}
let array = [5,3,8,1,2]

let rv = sortArray(array)
console.log(rv);
