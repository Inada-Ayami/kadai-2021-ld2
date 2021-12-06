const parent = { name: "Tama"}
const child = { name:"Mike"}
parent.child = child
child.parent = parent
console.log(parent.child.parent)
JSON.stringify(parent)//循環参照を持つのでエラー

