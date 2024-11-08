function sumEvenNumber(num){
    let dig = 0;
    for(let i=1;i<=num;i++){
        if(i%2==0){
            dig = dig + i
        }
    }
    return dig
}

console.log(sumEvenNumber(10));
