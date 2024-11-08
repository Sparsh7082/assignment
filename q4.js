function reverseNumber(num){
    let rn = 0;
    while(num>0){
        rn = rn*10 + num%10;
        num = Math.floor(num/10)
    }
    return rn
}

console.log(reverseNumber(12345));
