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
let people = new People;