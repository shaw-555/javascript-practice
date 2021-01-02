let promise = new Promise((resolve,reject) => {
    // 没有执行resovle或者reject前，promise的state为 pending，
    // 执行resovle后state为fullfilled，执行reject后为rejected
    // promise的state和result都是内部的，我们无法直接访问
    // setTimeout(resolve("finished"),10000)
    setTimeout(reject('Wooooph'),10000);
});

console.log(promise);

    // then方法
promise.then(
    result => console.log(result),
    error => console.log(error)
);

let promise1 = new Promise((resolve,reject) => {
    reject(new Error('ouch'));
})
    // catch方法
promise1.catch(
    error => console.log(error.toString().repeat(10))
)

    // finally方法，finally是无论resovle或reject与否，要在settled时执行的代码
let promise2 = new Promise((resolve,reject) => {
    resolve(Math.floor(3.5));
})

promise2.finally(()=> console.log('promise ready')).then(result => console.log(result));

let promise3 = new Promise((a,b)=>{
    b('hehe'.repeat(10));
});

promise3.catch(error => console.log(error)).finally(() => console.log('it is already done'));
// 打印出来的值会按照上下顺序执行


function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
      document.head.append(script);
    });
}


let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...'));