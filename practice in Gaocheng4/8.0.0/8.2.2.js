// 工厂模式
function createPerson(name, age, job){
    let o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.say = function(){}
    return o;
}

function createCar(name,wheels,moto){
    let o = new Object();
    o.name = name;
    o.wheels = wheels;
    o.moto = moto;
    return o;
}

function createFamily(number,man,woman){
    let o = new Object();
    o.number = number;
    o.man = man;
    o.woman = woman;
    return o;
}

let person = createPerson('a','b','c');
let person = createCar('a','b','c');
let person = createFamily('a','b','c');