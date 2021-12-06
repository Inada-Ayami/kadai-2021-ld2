const cat = {
    name:"tama",
    age: 5
}

console.log(cat)
const jsonstring = JSON.stringify(cat)
console.log(jsonstring)

const cat_parsed = JSON.parse(jsonstring)
console.log(cat_parsed)

const a = {"a":10, "b":10,} //エラーではない
JSON.parse(` {"a":10, "b":10,}`)　//エラー

