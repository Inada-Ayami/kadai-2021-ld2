//スコープの実験
const x = "bye"
{
    const x = "hello"
    console.log(x)
}
{
    const x = "bonjour"
    console.log(x)
}
console.log(x)