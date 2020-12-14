// function aaa(){
//     var test = '2222';
// }

// aaa();

// console.log(test,'test 变量在函数执行结束后被摧毁');
function bbb(){
    test = '没了var我就是一个全局变量';
}

bbb();
console.log(test,'没了var我就是一个全局变量');
