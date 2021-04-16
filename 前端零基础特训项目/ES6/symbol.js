

const sy = Symbol();

const sym3 = Symbol('sss')

console.log(Symbol() === Symbol());
console.log(sym3);

// 类型转换
console.log(sym3.toString());
console.log(String(sy));

console.log(Boolean(sy));

// 写法一
let a = {}
let sym = Symbol('aaa');
a[sym] = 'aaa';

console.log(a)

// 写法二

let b = {
    [sym]: 456
};

console.log(b);

// 写法三
// 各种definePorperty

// 值的共享

let s1 = Symbol.for('hh');
let s2 = Symbol.for('hh');

console.log(`compare s1 & s2 is ${s1 === s2}`);

// Symbol 和 Symbol.for的区别

let s3 = Symbol('share');
let s4 = Symbol.for('share');

console.log(`compare s3 & s4 is ${s3 === s4}`);

console.log(Symbol.keyFor(sy));