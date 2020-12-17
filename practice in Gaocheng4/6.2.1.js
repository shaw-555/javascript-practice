var str = 'abc';
console.log(Array.from(str));

var c = [1,2,3,4];
console.log(Array.from(c));

var obj ={
    0:1,
    1:2,
    2:3,
    3:4,
    length:4
};
console.log(Array.from(obj));

const iter = {
    *[Symbol.iterator]() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
  } 
};
console.log(Array.from(iter));

// Array.of()可以把一组参数转换为数组。这个方法用于替代在 ES6 之前常用的 Array.prototype. slice.call(arguments)，一种异常笨拙的将 arguments 对象转换为数组的写法:
// console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
// console.log(Array.of(undefined));  // [undefined]