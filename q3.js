function factorial(num){
    if(num==0){
        return 1
    }
    else{
        let dig = 1;
        for(let i=1;i<=num;i++){
            dig = dig * i;
        }
        return dig
    }   
}

console.log(factorial(5));
