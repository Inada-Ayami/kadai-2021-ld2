//メソッドのオーバーライド

class Person {
    constructor(name){
        this.name = name
    }
    hello(){
        console.log(`こんにちは、${this.name}です。`)
    }
}

　const person = new Person("田中")
person.hello()

class Student extends Person{
    constructor(name,univName){
        super(name)
        this.univName = univName
    }
    hello() {
        super.hello()
        console.log(`${this.univName}出身です。`)
　　}
}

const student = new Student("吉田","立命館大学")
student.hello()