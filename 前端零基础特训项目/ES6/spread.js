

const countries = ["china", "janpan", "france", "england"];

const africa = ["cango", 'liba'];

console.log([...countries, ...africa]);
console.log([..."hehe"]);

const a = {
    a: [1],
    b: [2],
    c: [3]
}

var expense = {
    type: 'es6',
    amount: 45
};

const {  amount,type } = expense;
console.log(type, amount);

// 数组的结构形式
const names = ["Henry", "Bucky", "Emily"];
const [name1, name2, name3] = names;
console.log(name1, name2, name3);

const { length } = names;
const { iteration } = names;
console.log(length);
console.log(iteration);

const [nickname, ...rest] = names;
console.log(nickname);
console.log(rest);

const people = [
    { name: "Henry", age: 20 },
    { name: "enry", age: 25 },
    { name: "Benry", age: 30 },
];

const [{ name }] = people;
console.log(name);

class Car {
    constructor(option) {
        this.title = option.title;
        this.size = option.size;
    }
    drive() {
        return 'Vroom';
    }
}

const car = new Car({ title: "new" });

console.log(car);
console.log(car.drive());

class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }
}



const toyota = new Toyota({ color: "red", title: "Focus" });
console.log(toyota.drive());