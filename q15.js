function isPalindrome(str){
    let rstr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rstr = rstr + str[i];
    }
    if(str==rstr){
        return true
    }
    else{
        return false
    }
}

let rv = isPalindrome("madam")
console.log(rv);
