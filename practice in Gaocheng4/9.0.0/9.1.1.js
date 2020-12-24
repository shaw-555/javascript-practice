const target = {
    id: 'target'
};

const handler = {};

const proxy = new Proxy(target,handler);
// proxy 和targetlog起来很相似
console.log(proxy);
console.log(target);

// proxy和target访问的属性是同一个值
console.log(proxy.id);
console.log(target.id);
console.log(proxy.id == target.id);

// 给目标属性赋值会反映在两个对象上
// 因为两个对象访问的是同一个值
target.id = 'foo';
console.log(proxy.id);
console.log(target.id);

// 给代理赋值会反应在两个对象上
// 因为两个对象访问的是同一个值
proxy.id = 'Qux';
console.log(proxy.id);
console.log(target.id);

// hasOwnProperty()方法在两个地方
// 都会应用到目标对象
console.log(target.hasOwnProperty('id'));
console.log(proxy.hasOwnProperty('id'));

// Proxy.prototype为undefinde
// console.log(target instanceof Proxy);
// console.log(proxy instanceof Proxy);

const target2 = {
    foo:'bar'
}

const handler2 = {
    get() {
        return 'handle override';
    }
}

const proxy2 = new Proxy(target2, handler2);

console.log(target2.foo);
console.log(proxy2.foo);


console.log(target2['foo']);
console.log(proxy2['foo']);

