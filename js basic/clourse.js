function a(x){
    var age = 10;
    var x = 10;
    function b(){
        console.log(age + x);  
    }
    b();
}

var test = a;

var c =test();
console.log(c);

function foo() { 
    var a = 2;

    function bar() { 
        console.log( a );
    }
    return bar; 
}
var baz = foo;
baz()(); // 2 —— 朋友，这就是闭包的效果。
    

function module(){
    var a = 10;
    var b = 11;

    function incre(){
        a++;
        b++
        return {
            a,b
        }

    }

    function decre(){
        a--;
        b--;
    }

    return {
        a:incre,
        b:decre
    }
}

var test = module();
var c = test.a();
console.log(c);


var strForReverse = '987654321';
function reve(str){
    return str.trim().split('').reverse().join('');
}

var testForReve = reve(strForReverse);

console.log(testForReve);


console.log(!undefined);
