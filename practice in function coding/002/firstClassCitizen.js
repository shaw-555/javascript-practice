// firstClassCitizen

// 1.函数和数字一样可以存储为变量
let ten = (function(){ return 10})();
console.log(ten);
console.log(typeof ten);

// 2.函数和数字一样可以存储为数组成员
let arr = [1,(function(){ return 10})()];
console.log(arr)

// 3.函数和数字一样可以存储为对象的成员对象
let obj = {
    day:10,
    num: (() => { return 111})()
}

console.log(obj)

// 4.函数和数字一样可以在使用时直接被创建出来
console.log(11 + (function(){ return 11})());

// 5.函数可以作为参数传递给另一个函数
function weirdAdd(n,f){
    return n + f;
}

console.log(weirdAdd(11, (function(){ return 11 })()));

// 6.函数可以被return
function re(){
    return function(){
        return 33;
    }
}

var six = re();
console.log(six())