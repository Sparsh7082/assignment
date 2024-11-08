function printInvertedTriangle(num){
    for(let row=1;row<=num;row++){

        //kuch stars chapne h
        for(let star=1;star<=num-row+1;star++){
            process.stdout.write("*")
        }
        //new line me aana h
        console.log();
    }
}

printInvertedTriangle(4)