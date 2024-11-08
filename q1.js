function checkprime(num){
    if(num==1){
        return false
    }
    let nof = 0;
    for(let div=2;div*div<=num;div++){
        if(num%div==0){
            nof++;
            break;
        }
    }
    if(nof>0){
        return false
    }
    else{
        return true
    }
}

console.log(checkprime(4));