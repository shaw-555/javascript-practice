console.log(Object.is(true,1));
console.log(Object.is({},{}));
console.log(Object.is('1',1));

console.log(Object.is(-0,0));
console.log(Object.is(+0,0));
console.log(Object.is(NaN,NaN));
