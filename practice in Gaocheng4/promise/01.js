const file = (name, sec = 1000, resolve) => {
    setTimeout(() => {
        resolve()
        console.log(name);
    }, sec)
}


let promise = new Promise((resolve, reject) => {
    file('a', 3000, resolve);
}).then(() => {
    return new Promise((resolve, reject) => {
        file('b', 2000, resolve);
    }).then(() => {
        return new Promise((resolve, reject) => {
            file('c', 1, resolve);
        })
    })
})

function returnPromise(callback1,callback2){
    return new Promise((resolve, reject) => {
        callback1
    }).then(() => {
        return new Promise((resolve, reject) => {
            callback2
        })
    })
}
//是resolve()使得异

// 异步的
// promise
//     .then(()=>{
//     file('a',2000);
//     file('b',1500)
//     file('c',2000);
// })

// 同步的

console.log('b');

// let promise2 = new Promise((resolve,reject) => {
//     file('a', 5000, resolve);
// }).then(() => {
//     console.log(333);
    
// })


