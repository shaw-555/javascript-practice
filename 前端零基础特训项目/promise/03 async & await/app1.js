async function getInfo(){
    const res = await fetch('https://api.github.com/users');
    const data = await res.json();

    return data;
}

getInfo().then(data => console.log(data));

// 会造成阻塞