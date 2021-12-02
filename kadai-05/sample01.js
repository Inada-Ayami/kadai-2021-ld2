const obj1 = {}
const obj2 =  {
    a:100, 
    b:"こんにちは",
}
const obj3 = { 
    x: {y: {z: "入れ子のオブジェクトの例"
}　}　}

const familyname = "inada"
const firstname = "ayami"

const obj4 = {
         //my-key:"aaaaa"
          "my-key":"aaaaa",
         //123hello:true
         "123hello":true,
         "m&m":"チョコレート",
         [familyname+firstname]:"aaaa",
         hello: ()=> {console.log("こんにちは")}
}
obj4.hello()