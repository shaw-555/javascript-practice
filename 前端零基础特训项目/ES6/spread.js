

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