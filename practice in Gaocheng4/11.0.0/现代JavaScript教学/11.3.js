// promise的链式调用

let promise = new Promise((resolve,reject) => {
    resolve(1);
}).then((result)=>{
    console.log(result);
    return result*2;
}).then((result)=>{
    console.log(result);
    return result*2;
}).then((result)=>{
    console.log(result);
    return result*2;
}).then((result)=>{
    console.log(result);
    return result*2;
});