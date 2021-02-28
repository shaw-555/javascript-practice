async function controlInfo(){

    const res = await fetch('https://api.github.com/users');

    let error = true;

    if(!error){
        const data = await res.json();
        return data;
    }else {
        const error = await Promise.reject(new Error('suck....'));
    }
}

controlInfo().then(data => console.log(data));