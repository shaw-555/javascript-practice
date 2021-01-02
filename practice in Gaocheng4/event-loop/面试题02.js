setTimeout(() =>{
    console.log('setTimeout 1');
    Promise.resolve().then(()=>{
        console.log('then 1');
    })
},0);

Promise.resolve().then(() =>{
    console.log('then 2');
    Promise.resolve().then(()=>{
        console.log('then 3');
    })
    setInterval(() => {
        console.log('setInterval 2')
    },1000);
})