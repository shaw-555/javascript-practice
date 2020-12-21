const m = new Map([
    ["key1","val1"],
    ["key2","val2"],
    ["key3","val3"]
]);

console.log(m);
console.log(m.entries());
console.log(m[Symbol.iterator]);
console.log(m.has("key1"));
console.log(m.has("key2"));
console.log(m.has("key3"));
m.set("key4","val4");
console.log(m);
var c = m.size;
console.log(c);

m.delete("key4");
console.log(m);

let s = Symbol("s");
let arr = new Array(1,2,3);
arr.push('4');
arr.push('5');
arr.pop();
arr.pop();
arr.pop();
m.set(s,'s');
m.set(true,true);
m.set(false,'string');
m.set(arr,arr)
console.log(m);



let map = new Map();
map.set(3,30);
map.set(2,20);
map.set(10,100);
map.sort = ()=> {
    return 1;
}
map.sort();
console.log(map);

console.log(map.values());
console.log(map.keys());
console.log(map.entries());


