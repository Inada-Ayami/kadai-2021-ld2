//配列とforループ
const animals = ["dog","cat","bird"]

for (let index = 0; index < animals.length; index = index + 1){
    const animal = animals[index];
    console.log(`I have ${animal}.`)
}

for (const animal of animals) {
    console.log(`I have ${animal}.`)
}

animals.forEach((animal) =>{
    console.log(`I have ${animal}.`)
})


const lines = animals
      .map((animal) => {return `I have ${animal}.`})
      .map(line =>{return line.toUpperCase() })
      .forEach( line => {console.log(line) })


