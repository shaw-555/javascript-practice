function thisDefalut(){
    console.log('this points to : '+ this.a);
    
}

var a = 10;

thisDefalut();

var obj = {
    a : 'a in the obj',
    thisByObj: thisDefalut
}

obj.thisByObj();


obj.thisByObj.apply({a:'a in the another obj'});

function myThis(){
    this.a = 'a in the constructor';
}

var c = new myThis();
console.log(c);

console.log(Object.getOwnPropertyDescriptor(obj,"a"));

var str ='1';
str.alert = 1;
console.log(str);


var goodObj = {
    name:'takusa'
}

var supersedObj = Object.create(goodObj);
supersedObj.age = 25;
supersedObj.name = 'hehe';

console.log(supersedObj.name);
for( var prop in supersedObj){
    console.log('value is ' +prop,supersedObj[prop]);
    
}
