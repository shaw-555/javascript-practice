const file = (name,time) => {
    return new Promise((resolve,reject)=>{
        resolve();
        setTimeout(()=>{
            console.log(name)
        },time);
    })

}


let promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve();
        console.log('download a');
    },3000);
}).then(() => {
    file('download b',5000).then(()=>{
        file('download c',2000).then(()=>{})
    });
})


