function object(o){
    function F(){};
    F.prototype = o;
    return new F();
}

function createAnother(original){
    let clone = object(original);
    clone.sayHe = function(){
        console.log('hheheeheheheh');
    }
    return clone
}

let house = {
    size :4,
    height:5
}

let anotherHouse = createAnother(house);
anotherHouse.sayHe();
