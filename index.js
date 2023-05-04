let namePerson = "Igor" // string
const email = 'igor@nfaustino.com' // string

const result = 1; // number
const float = 1.5; // number

const isSuccess = true; // boolean
const isFetching = false; // boolean

let person = {
    name: "Igor",
    email: "test@mail.com",
    age: 60,
    workExperience: [
        {name: "Integrado"},
        {name: "UTFPR"},
        {name: "Padaria do vizinho"}
    ]
} // object

let names = ["Igor", "Pedro", "Paula", "Carlos", "Maria"] // object

const callback = (name, idx, arr) => {
    console.log(idx, name, arr)
}

const pedro = {
    ...person,
    name: "Pedro",
    dogName: "Cachorro"
} 

console.log(pedro)