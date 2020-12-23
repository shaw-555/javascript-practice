function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function (){
    return this.property;
}

function SubType() {
    this.Subproperty = false;
}

SubType.prototype = new SuperType();

SuperType.prototype.getSubValue = function() {
    return this.Subproperty;
}

let instance = new SubType();
console.log(instance.getSubValue());
console.log(instance.getSuperValue());

console.log(instance instanceof Object);
console.log(instance instanceof SuperType);
console.log(instance instanceof SubType);