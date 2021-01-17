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


const ma = new Map([
    ["key1",1],
    ["key3",3],
    ["key5",5],
    ["key2",2],
    ["key4",4]
]);
console.log(ma);

console.log(ma.has(undefined));// ma已经被定义了

const lo = new Map([[]]);
console.log(lo); //{ undefined => undefined }
console.log(lo.has(undefined));

const la = new Map([{}]);

const sy = Symbol("sy");
console.log(la); //{ undefined => undefined }
la.set(true,()=>{ console.log("hello world" )});
la.set(zhangyang,"galilia");
la.set(sy,123)
console.log(la.has(undefined));
console.log(la); 


// 与 Object 只能使用数值、字符串或符号作为键不同，Map 可以使用任何 JavaScript 数据类型作为 键。
function zhangyang(){
    console.log("galilia");
}