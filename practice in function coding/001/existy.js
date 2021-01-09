// 判断一个参数是否存在
const existy = (x) => {
    return x != null;
}

console.log(existy(false)); // true
console.log(existy(null)); // false
console.log(existy(undefined)); // false
console.log(existy((function(){})())); // false
console.log(existy({}.hehe)); // false
console.log(existy(9));// true
console.log(existy({}));// true

// 这个函数用于判断一个值是否“存在”，为null或undefined就不存在，其他
// 情况就存在


// 判断一个参数是否为真
const truthy = (x) => {
    return x !== false && existy(x);
}

console.log('truthy is '+truthy(1)); // true
console.log('truthy is '+truthy(0)); // true
console.log('truthy is '+truthy(-0)); // true
console.log('truthy is '+truthy(null));  // false
console.log('truthy is '+truthy(undefined)); // false

let a = [null,undefined,0,1,'']
let c = a.map(truthy);
a.forEach((x) => { x+1});

console.log(c);
console.log(a);
// console.log(d);