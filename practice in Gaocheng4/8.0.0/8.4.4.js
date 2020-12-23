class Vehicle {
    constructor() {
        this.hasEngine = true;
    }
    static identify(){
        console.log('vehicle')
    }
};

class Bus extends Vehicle {
    constructor() {
        super();
        console.log('test of Vehicle', this instanceof Vehicle);
        console.log(this);
    }
    static identify(){
        super.identify();
    }
};

let b = new Bus();
Bus.identify();
console.log(b instanceof Bus);

console.log(b instanceof Vehicle);

function Person(){};

class Engineer {};

let e = new Engineer();
console.log(e instanceof Engineer);
console.log(e instanceof Person);

// super只能在派生类的构造函数和静态方法中使用
// 不能单独使用super关键字，要么用它调用构造函数，要么用它引用静态方法
// 调用super()会调用父类构造函数，并将返回的实例赋给值this
// 如果没有定义构造函数，在实例化时会调用super()，而且会传入所有传给派生类的 参数。
// 在构造函数中，不能在调用super()之前引用this
// 如果在派生类中显式定义了构造函数，则要么在构造函数中调用super，要么返回一个对象