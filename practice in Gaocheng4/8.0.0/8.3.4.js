function object(o){
    function F(){};
    F.prototype = o;
    return new F();
}
function Animal(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
}

let person ={
    age: 15,
    name : 'yankee'
}
let animal = object(Animal.prototype);
let anotherPerson = object(person);
console.log(person);
console.log(anotherPerson);
console.log(animal);


