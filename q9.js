function printDiamond(num){
    let nsp = Math.floor(num/2);
    let nst = 1;
    for(let row=1;row<=num;row++){
        for(let sp=1;sp<=nsp;sp++){
            process.stdout.write(" ")
        }
        for(let star=1;star<=nst;star++){
            process.stdout.write("*")
        }
        console.log();
        if(row<Math.ceil(num/2)){
            nsp = nsp-1;
            nst = nst+2
        }
        else{
            nsp = nsp+1;
            nst = nst-2
        }
        
    }
}

printDiamond(7)