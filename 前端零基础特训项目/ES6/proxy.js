let employee = {
    name: "shaw",
    age: 32,
    salary: 1000
};

let handlerGet = {
    get: function (target, property) {
        return property in target ? target[property] -1 : 'none this';
    }
};

let proxyGet = new Proxy(employee, handlerGet);

console.log(proxyGet.name);
console.log(proxyGet.height);