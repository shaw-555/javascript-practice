// let p = new Promise(() => {});

// let p2 = new Promise(()=> 1+1)

// setTimeout(console.log,0,p);

// setTimeout(console.log,1000,p2);


// let p1 = new Promise((resolve,reject) => resolve());

// setTimeout(console.log,0,p1);// 会返回了 Promise { undefinded }

// let p2 = new Promise((resolve,reject) => reject());

// setTimeout(console.log,0,p2);// 会返回 Promise { <rejected> }

// 会先打印executor，后打印 initiailized
// new Promise(() => setTimeout(console.log,0, 'exectuor'));
// setTimeout(console.log,0,'initialized');

// 添加setTimeout可以 推迟切换Promise的状态
// let p3 = new Promise((resolve,reject) => setTimeout(resolve,10000));
// setTimeout(console.log,0,p3);

// console.log('添加setTimeout可以 推迟切换Promise的状态');
// let p4 = new Promise((resolve,reject) => setTimeout(reject,1000));
// setTimeout(console.log,0,p4);

console.log('resolve 或者 reject 无论哪个被调用，状态都不可转换了,\n此时修改状态会静默失败');

let p5 = new Promise((resolve,reject) => {
    resolve();
    reject();
})

setTimeout(console.log,0,p5);

console.log('为了避免期约卡在特定状态，可以添加一个定时推出功能');

let p6 = new Promise((resolve,reject) => {
    console.log('被定时推出前');
    setTimeout(reject,1000);
});

setTimeout(console.log,0,p6);


setTimeout(console.log,0,Promise.resolve('Promise的静态方法'));
setTimeout(console.log,0,Promise.resolve('Promise的静态方法','2'));

//对于Promise.resolve()而言，如果传入的参数本身就是一个期约，则该行为就相当于一个包装类

