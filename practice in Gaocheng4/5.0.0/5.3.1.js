let falseObject = new Boolean(false);
let result = falseObject && true;
console.log(result);

let falseValue = false;
let result2 = false && true;
console.log(result2);

let result3 = falseObject && falseValue;
console.log('result3 is '+result3);

console.log(typeof falseObject, falseObject instanceof Object);
console.log(typeof falseValue, falseValue instanceof Object);

// 永远不要使用 new Boolean