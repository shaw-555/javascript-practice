const name = 'andrew';
const num = 5;

// name = 'hehe'; //TypeError: Assignment to constant variable.
// num = 4; //TypeError: Assignment to constant variable.

const obj = {};
obj.name = 'bob';
obj.age = 18;
// obj = {};

console.log(obj);

const arr = [];
arr.push(0);

console.log(arr);

// arr = {};
// console.log(arr);

// 结论，我们可以给const 定义的对象进行修改，但无法令其指向另一个对象