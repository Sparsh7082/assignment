function printNumberPyramid(num){
    let nsp = num-1;
    for(let row=1;row<=num;row++){
        let ans = '';
        for(let sp=1;sp<=nsp;sp++){
            ans = ans + " "
        }
        let val = 1;
        for(let ss=1;ss<=row;ss++){
            ans = ans + val;
            val++; //3
        }
        val--; //2
        for(let ls=1;ls<=row-1;ls++){
            val--; //1
            ans = ans + val;
        }
        console.log(ans);
        nsp=nsp-1
    }
}
printNumberPyramid(5)