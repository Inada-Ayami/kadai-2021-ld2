const obj ={
    name:"inada",
    age:20,
    gender:"female",
}

console.log(obj)
obj.age =obj.age +1
console.log(obj)

obj.hasCat =true
console.log(obj)

obj.hasDog = false
console.log(obj)

delete obj.hasDog
console.log(obj)