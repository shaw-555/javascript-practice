let arr = [1,2,3];
console.log(arr[Symbol.iterator]());
let str ='';
console.log(str[Symbol.iterator]());
// let num = 1234567;
// console.log(num[Symbol.iterator]());
// let obj = {};
// console.log(obj[Symbol.iterator]());
// let sym = Symbol();
// console.log(sym[Symbol.iterator]());
let set = new Set();
console.log(set[Symbol.iterator]());
let map = new Map();
console.log(map[Symbol.iterator]());


// 可以使用迭代器的数据类型有 str、arr、map、set、arguments、nodeList
// 迭代器就是[Symbol.iterator]

// 使用迭代器的next方法
let list = [1,2,3,4,5];

let iter = list[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());