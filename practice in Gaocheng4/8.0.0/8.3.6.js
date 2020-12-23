function object(o){
    function F(){};
    F.prototype = o;
    return new F();
}

function inherance(sub, sup) {
    let prototype = object(sup.prototype);
    prototype.constructor = sub;
    sub.prototype = prototype;
}