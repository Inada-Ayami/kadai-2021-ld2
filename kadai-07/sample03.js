class Person{
 static hello()  {
     console.log(this)
 } 
 constructor(name){
     this.name = name
 }
 hello(){
     console.log(this)
 }
}

const person = new Person("田中")
Person.hello()
person.hello()