function getSum(...values){
    return values.reduce((x,y) => x+y, 0);
}

console.log(getSum(1,2,3,4,5));

function ignoreFirst(firstValue,...values){
    console.log(values);
}

ignoreFirst();
ignoreFirst(1);
ignoreFirst(4);
ignoreFirst(1,2,3,4,5);