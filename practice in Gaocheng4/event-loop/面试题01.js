setTimeout(()=> {
    console.log("setTimeout 1");
    Promise.resolve().then(data => {
        console.log(222);
    })
    console.log("setTimeout 11");
})

setTimeout(()=>{
    console.log("setTimeout 2");
})

Promise.resolve().then(data=>{
    console.log(111);
})