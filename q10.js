function mergeObjects(object1,object2){
    return {...object1,...object2}
}
let obj1 = {
    name:"Alice",
    age:25
}

let obj2 = {
    age:30,
    city:"New York"
}

let rv = mergeObjects(obj1,obj2)
console.log(rv);
