Function.prototype.bind = function(context,...args){
    // this表示调用bind的函数
    let self = this;
    // this instanceof fBound为true，表示构造函数情况
    let fBound = function(){
        return self.apply(this instanceof fBound ? this: context|| window, args.concat(
            Array.prototype.slice.call(arguments)));
    }
    // 保证原函数的原型对象上的属性不丢失
    fBound.prototype = Object.create(this.prototype);

    return fBound;
}
