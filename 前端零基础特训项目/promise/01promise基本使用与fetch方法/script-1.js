// promise 的 resolve、reject、then、catch基本使用
let prom = new Promise((resolve, reject)=>{
    // reject();
    setTimeout( () => {
        resolve();
    },3000);
});
console.log(prom);

// promise => unresolved，pending 等待任务完成
// promise => resolved 任务完成，且没有任何问题
// promise => rejected 任务完成，且有问题
prom
    .then( () => {console.log('success')})
    .then( () => console.log('success again'))
    .then( () => console.log('success again'))
    .then( () => console.log('success again'))
    .then( () => console.log('success again'))
    .then( () => console.log('success again'))
    .catch( () => console.log('error occur'))