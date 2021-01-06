let message;
// message被隐式转换为undefined，!undefined又会变成true
if(!message){
    console.log('hehe')
}

console.log(typeof message);
console.log(typeof hehe);