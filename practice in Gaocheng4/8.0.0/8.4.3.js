// class Person {
//     constructor(){
//         //使用包装类以避免不同实例的属性相同
//         this.name = new String('Alan')
//     }
// }

// let p1 = new Person();
// let p2 = new Person();
// console.log(p1.name === p2.name);

class Food {
    constructor(){
        this.name = new String('burgeur');
        //定义在constructor里面的方法会被添加到每一个实例中
        this.stomach = function(){
            console.log('我会被添加到每一个实例上');
        }
    }
    //在类上的方法则挂载在prototype上
    stomach(){
        console.log('我是被添加到了Food类的prototype上');
    }
}

let food = new Food();
food.stomach();
console.log(food.__proto__.stomach());

//类块中不支持直接添加原始类型或者对象为属性
// class Person {
//     name:'Jake',
//     age: {}
// }


let symbolKey = Symbol('symbolKey');

class Person {
    constructor(){
        this.shout = () => (console.log('instance',this));
    }
    shout() {
        console.log('on the prototype', this);
    }
    static shout() {
        console.log('on the class',this);
    }
    stringKey() {
        console.log('invoked stringKey');
    }
    [symbolKey]() {
        console.log('invoked symbolKey');
    }
    ['computed' + 'Key'](){
        console.log('invoked computedKey');
    }
}

let p = new Person();
p.stringKey();
p[symbolKey]();
p.computedKey();
p.shout();
Person.prototype.shout();
Person.shout();