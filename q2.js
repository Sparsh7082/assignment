function fibonacci(num){
    let arr = [];
    let fd = 0;
    let sd = 1;
    if(num==1){
        arr.push(fd);
    }
    else if(num==2){
        arr.push(fd,sd);
    }
    else{
        arr.push(fd,sd);
        for(let i=1;i<=num-2;i++){
            let dig = fd + sd;
            arr.push(dig);
            fd = sd;
            sd = dig
        }
    }
    return arr;
}
console.log(fibonacci(2));
