// function aaa(){
//     var test = '2222';
// }

// aaa();

// console.log(test,'test 变量在函数执行结束后被摧毁');
function bbb(){
    test = '没了var我就是一个全局变量';
}

function aaa(){
    let heal = 'hehe';
}

bbb();
aaa();
console.log(test,'没了var我就是一个全局变量');
console.log(heal); // heal是not defined，该变量在退出函数后被销毁了，所以外部无法识别

