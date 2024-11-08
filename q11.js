// this is the example of deep copy

function shallowcopy(original,copy){
    return {original, copy}
}
let original = {
    a:1,
    b:2
}
let copy = {...original}
copy.a = 3

let rv = shallowcopy(original,copy)
console.log(rv);
