function SuperType(name){
    this.name = name;
    this.colors = [1,2,3,4]
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
}

function SubType(name,age){
    SuperType.call(this,name);

    this.age = age;
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function(){
    console.log(this.age);
}

let instance1 = new SubType("Nicholas", 29); 
instance1.colors.push("black"); 
console.log(instance1.colors); // "red,blue,green,black" instance1.sayName(); // "Nicholas"; instance1.sayAge(); // 29
let instance2 = new SubType("Greg", 27);
console.log(instance2.colors);  // "red,blue,green"
instance1.sayName();
instance2.sayAge();    
