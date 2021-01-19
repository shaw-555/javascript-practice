let dest , src ,result;

dest = {};
src = { id : "src"};

result =Object.assign(dest,src);

console.log(result);

console.log( result === dest); // 合并结果的索引地址即为assign中第一个参数的索引地址
console.log( src === dest ); // src 和 dest的索引地址不同



let target = {};
let source = { annual: 2021};
let result2 = Object.assign(target,source);


console.log(result2 === target);// true
console.log(target === source);// false
