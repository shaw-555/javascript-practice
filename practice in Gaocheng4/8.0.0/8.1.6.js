let name = "mat";


let national = "China";

let person ={
    name: name,
    national,
    sayColor(color) {
        return `it is ${color}`
    }
}
console.log(person.name);
console.log(person.national);
console.log(person.sayColor('green'));


