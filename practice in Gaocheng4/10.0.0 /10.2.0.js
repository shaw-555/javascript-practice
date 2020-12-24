function sum(num1, num2){
    return num1+num2;
}

console.log(sum(10,10));

let anotherSum = sum;

console.log(anotherSum(10,10));

sum = null;
// console.log(sum.name);

console.log(anotherSum(10,10));

function foo() {}
let bar = function() {};
let baz = () => {};

console.log(foo.name);
console.log(bar.name);
console.log(baz.name);
console.log((() =>{}).name);
console.log((new Function()).name);

console.log(foo.bind(null).name);


let dog = {
    years: 1,
    get age() {
        return this.years;
    },
    set age(newAge) {
        this.age = newAge
    }
}
let propertyDescriptor = Object.getOwnPropertyDescriptor(dog,'age');
console.log(propertyDescriptor.get.name);
console.log(propertyDescriptor.set.name);





