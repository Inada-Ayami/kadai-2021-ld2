class Person {
    constructor(name,hobby){
        this.name = name
        this.hobby = hobby
    }
    hello(){
        console.log(`こんにちは、${this.name}です。趣味は ${this.hobby}です。`)
    }
}
const yoshida = new Person("吉田","ランニング")
const hayashi = new Person("林","プログラミング")

yoshida.hello()
hayashi.hello()

class Teacher extends Person{
    constructor(name,hobby){
        super(name,hobby)
        this.isTeacher = true
    }
}
const kamata = new Teacher("鎌田","登山")
kamata.hello()
console.log(kamata.isTeacher)