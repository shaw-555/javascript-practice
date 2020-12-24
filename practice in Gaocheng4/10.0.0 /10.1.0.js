function sum(a,b){
    return a+b;
}

let sum2 = function(a,b){
    return a+b;
}

let sum3 = (a,b) => {
    return a+b;
}
// sum4的定义方法是不被推荐的，因为这样会造成性能的损耗
// 代码会被两次解释：第一次是当作常规的js代码，第二次是解释传给构造函数的字符串
let sum4 = new Function("num1","num2","return num1+num2");