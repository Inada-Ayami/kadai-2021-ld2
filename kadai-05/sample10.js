const cat ={
    name:"Tama",
    age:2,
    sex:"male",
}

const keys = Object.keys(cat)
console.log(keys)

const values = Object.values(cat)
console.log(values)

for(const key of keys){
    const value = cat[key]
    console.log(key,value)
}