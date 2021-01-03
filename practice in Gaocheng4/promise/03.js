
let promise1 = file('down a',5000).then(() => {
        return file('down b',4000);
    }).then(() => {
        return file('down c',3000);
    }).then(()=>{
        return file('down d',2000);
    }).then(()=>{
        return file('down e',1000);
    })

function file(name,time){
        return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve();
                    console.log(name);
                }, time);
        })
}