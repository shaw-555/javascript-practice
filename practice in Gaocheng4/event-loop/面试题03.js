setTimeout(() => {
    console.log('1111')
}, 0);

Promise.resolve().then(() =>{
    console.log('3333')
})

setTimeout(() => {
    console.log('2222')
}, 0);
