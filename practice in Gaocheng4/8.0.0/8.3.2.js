function Super() {
    this.color = [1,2,3];
}

function Sub(){
    Super.call(this);
}

let instance = new Sub();
instance.color.push(4);
console.log(instance);
