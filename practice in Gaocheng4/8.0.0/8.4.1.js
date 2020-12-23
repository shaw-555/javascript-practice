console.log(FunctionExpress);
var FunctionExpress = function(){};
console.log(FunctionExpress);

console.log(FunctionDeclaration);
function FunctionDeclaration(){};
console.log(FunctionDeclaration);

console.log(classExpress);
var classExpress = class {};
console.log(classExpress);

// class不支持变量提升
// console.log(ClassDeclaration);
// class ClassDeclaration {};
// console.log(ClassDeclaration);

class Foo {};

class Bar {
    constructor(){}
}

class Baz {
    get myBaz() {}
}

class Qux {
    static myQux() {}
}

//可以把class理解为一种函数
//class的构造函数和普通构造函数不同的是，class的构造函数必须在使用new
//操作符时才会被调用，否则会报错
console.log(typeof Qux);
console.log(Object.prototype.toString.call(Qux));
console.log(Object.prototype.toString.call(Qux.myQux));

