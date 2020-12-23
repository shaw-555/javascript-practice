let num = 10;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));

let num1 = 10.00000005;
console.log(num1.toFixed(2));

let numberObject = new Number(10);
let numberValue = 10;
console.log(typeof numberObject);             // "object"
console.log(typeof numberValue);              // "number"
console.log(numberObject instanceof Number);  // true
console.log(numberValue instanceof Number);   // false

