// 在JS中， .then()、.catch()、.finally()都是异步执行的，要等到当前
// 代码执行完后，才会执行.then()、.catch()、.finally()里面的代码
let promise = Promise.resolve();

promise
    .then((result) => console.log('promise done1'))
    .then((result) => console.log('promise done2'))
    .then((result) => console.log('promise done3'))

console.log('code finished')