let color = "blue";

function changeColor(color){
    if (color === "blue"){
        color = "red";
    }else{
        color = "blue"
    }
}

changeColor();// 没有传递参数进入函数，函数直接作执行，所以会改动color
console.log(color); // red

let color2 = "blue";

function changeColor(color){
    if (color === "blue"){
        color = "red";
    }else{
        color = "blue"
    }
}

changeColor(color2);// 传入了参数，所以会建立color2的拷贝，函数结束后会销毁color2的副本，不会影响到color2本身
console.log(color); // blue


let win = 10;
// console.log(out)
function outer(){
    console.log(win);
    let out = 11;
    function inner(){
        var inneer = 12;
        console.log(out);
    }
    inner();
}

outer();