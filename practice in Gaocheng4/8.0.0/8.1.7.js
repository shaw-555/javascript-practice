let person = {
    name: 'Matt',
    age: 27
}

let personAge = person.age,
    personName = person.name;

console.log(personAge);
console.log(personName);

let { name: theName, age: theAge} = person;
console.log(theName);
console.log(theAge);


