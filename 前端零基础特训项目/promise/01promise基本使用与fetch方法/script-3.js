const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const output = document.getElementById("output");

function getText() {
    fetch('text.txt')
        .then((response) => response.text())
        .then(data => {
            console.log(data)
            document.getElementById("output").innerText = data;
        })
        .catch(err => alert(err));
}

function getJSON() {
    fetch('posts.json')
        .then( res => res.json())
        .then( datas => {
            let context = '';
            datas.forEach((data) =>{
                console.log(data);

                context += `<li>${data.title}</li>`;
                document.getElementById('output').innerHTML = context;

            })
        });
}


function getExternal(){
    fetch('https://api.github.com/users')
    .then( res => res.json())
    .then( data => {
        let context = '';
        
        data.forEach( (item) => {
            context += `<li>${item.id}</li>`
            output.innerHTML = context;
        })
    });
}


button1.addEventListener("click", getText);
button2.addEventListener("click", getJSON);
button3.addEventListener("click",getExternal);