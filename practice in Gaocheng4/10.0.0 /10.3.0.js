function sayHi(){
    console.log('Hello'+arguments[0]+ arguments[1]);
}

sayHi('hh','jj');

function howManyArg(){
    console.log(arguments.length);
}

howManyArg();
howManyArg([],[],[]);
howManyArg(...[1,2,3])

function baz(a,b){
    let bar = () => { console.log(arguments[0] - arguments[1]) };
    bar();
}

baz(3,'a');