//setTimeout や　setIntervalのキャンセル

const timerId = setTimeout(() =>{console.log("hello!")},3000)
clearInterval(timerId)

// let count = 0
// const timerId = setInterval(
//     () => {
//         count = count + 1
//     console.log("hello"+ count)
//     if (count>10){
//         clearInterval(timerId)
//     }
// }, 
// 500
// )