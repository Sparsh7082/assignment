function printTriangle(num){
    for(let row=1;row<=num;row++){
        for(let star=1;star<=row;star++){
            process.stdout.write("*")
        }
        console.log();
    }
}

printTriangle(4)