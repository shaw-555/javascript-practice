function Person() {};

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "software engineer";
Person.prototype.sayName = function(){
    console.log(this.name);
}
let person = new Person();

let People = function(){};

People.prototype.name = "nick";
People.prototype.age = 33;
People.prototype.job = "pioneer";
let people = new People();

console.log(people);


function protoPen(length,weight,dexterity){
    protoPen.prototype.length = length;
    protoPen.prototype.weight =weight;
    protoPen.prototype.dexterity =dexterity;
}

let pen = new protoPen(1,2,3);
console.log(pen);
console.log(pen.length);
console.log(pen.weight);
console.log(pen.author);