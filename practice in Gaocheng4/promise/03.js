
let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log('download a');
        }, 5000);
    }).then(() => {
            return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve();
                        console.log('download b');
                    }, 1000);
                })
    }).then(() => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                    console.log('download c');
                }, 2000);
    }).then(()=>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve();
                console.log('download d');
            }, 4000);
        })
    })
})