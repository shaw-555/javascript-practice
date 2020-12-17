let outer = 11;

if (outer){
    let inner = 100;
    console.log(inner);
}

// console.log(inner,'因为inner处于块级作用域，所以无法被log，机器会报错');

// 1.let 没有暂时死区

console.log(age);
var age = 15;

// console.log(let);
// let age = 20;
// let没有变量hoist，此时会报出SyntaxError


// 2.let声明的变量不会成为window对象的属性
var monopoly = 'aaa';
console.log(global.monopoly); // aaa

let oligopoly = 'bbbb';
console.log(global.oligopoly); // undefined

// 4. for 循环中的 let 声明

for(var i = 0; i<10;i++){
    // i+= 2;
    // console.log(i);
    setTimeout(() => console.log(i), 0)
}

for (let i = 0; i < 10; i++) {
    // let i = 0;
    // i+=2;
    // console.log(i);
    setTimeout(() => console.log(i), 0)
}