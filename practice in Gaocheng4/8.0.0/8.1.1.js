let person = {};
Object.defineProperty(person,"name",{
    writable:false,
    value:"shaw"
})
console.log(person.name);
person.name="lee";
delete person.name;
console.log(person.name);

let people = {};
Object.defineProperty(people,"name",{
    configurable:false,
    value:"yankee"
})

console.log(people.name);
people.name= "yankee";
delete people.name;
console.log(people.name);

let book = {
    year_: 2017,
    edition:1
};

Object.defineProperty(book,"year",{
    get() {
        return this.year_;
    },
    set(newValue) {
        if(newValue > 2018){
            this.year_ = newValue;
            this.editon = newValue+2017
        }
    }
})

console.log(book.year);
book.year = 2019;
console.log(book.year);
console.log(book.edition);

