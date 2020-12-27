function countArgument(){
    console.log(arguments.length);
}

countArgument(1,...[12,3,4]);
countArgument(...[12,3,4]);

function getProduct(a,b,c =1 ){
    return arguments.length;
}

let getSum = (a, b, c=1 ) => {
    return a+b+c;
}

console.log(getProduct(...[1,,,,,2]));
console.log(getSum(...[2,3,4]));

