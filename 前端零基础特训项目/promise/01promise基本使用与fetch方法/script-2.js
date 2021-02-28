// 使用fetch
console.log(fetch);

let url = "https://jsonplaceholder.typicode.com/posts123456";

console.log(fetch(url));

fetch(url)
    .then( response => response.json())
    .then(data => console.log(data))
    .catch( err => console.log("error:"+err));



let url2 = "https://www.baidu.com/";

fetch(url2)
    .then( response => response.json())
    .then( data => console.log(data));