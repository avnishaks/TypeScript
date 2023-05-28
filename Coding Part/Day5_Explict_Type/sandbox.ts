// explict type

let username:string
let year:number
let age:number
let email:string

email="avnis@gmail.com"
//email=90

username ="aks"
//username =90

year =8978
//year="as"

age=90
// age="ajss"



// Array
//string & number
let abc:string[]=[];
abc.push("avnish")
console.log(abc)


let numbers:number[]=[];
numbers.push(10);
console.log(numbers)
//numbers.push("ajajja")



// union type
let mixed: (string|number|boolean)[]=[];
mixed.push("abc")
mixed.push(10)
mixed.push(false)
console.log("MIXED",mixed)


let uuid: string|number|boolean
uuid="aks"
uuid=100
// latest one value printed
console.log(uuid)

// objects

let ninjaOne:Object

ninjaOne ={name: "person"}

let ninjaTwo:{
    persons:string,
    nature:string,
    age:number,
    year:number,
    isActive:boolean

}

//ninjaTwo={persons:"Avnish"age:30,year:30,isActive:false}
ninjaTwo={persons:"Avnish",nature:"Kind",age:30,year:30,isActive:false}
