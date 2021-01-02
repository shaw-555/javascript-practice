// console.log('aaa');
// setTimeout(() => {
//     console.log('bbb');
// }, 0);
// console.log('ccc');


setTimeout(() => {
    console.log('asynchronous 2');
}, 500);

console.log('synchronization 1');

setTimeout(() => {
    console.log('asynchronous 1');
}, 100);


setTimeout(() => {
    console.log('asynchronous 3');
}, 600);


console.log('synchronization 2');