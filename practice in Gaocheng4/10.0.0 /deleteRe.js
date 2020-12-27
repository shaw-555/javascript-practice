var arr =[1,1,2,2,3,3,4];
console.log(arr.indexOf(0));
console.log(arr.indexOf(1));

console.log(arr.indexOf(1));
console.log(arr.indexOf(2));
console.log(arr.indexOf(3));
console.log(arr.indexOf(4));
console.log(arr.indexOf(-8));

var newArr = [];

for(let i =0; i< arr.length; i++){
    if(newArr.indexOf(arr[i]) === -1){
        newArr.push(arr[i]);
    }
}

var theArr = arr.map(() => {
        if(newArr.indexOf(arr[i]) === -1){
        newArr.push(arr[i]);
    }
})
console.log(theArr);

console.log(newArr);

function deleteRe (arr){
    let newArr = [];

    for(let i =0; i< arr.length; i++){
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

function sumUp(n,m){
    let sum = 0;
    for (let i= n ; i <= m; i++) {

        sum+= i; 
    }

    return sum;
}

console.log(sumUp(3,5));
console.log(sumUp(1,5));
console.log(sumUp(-1,2));


function factorial(n){
    if(n ===1){
        return 1
    }
    return n*arguments.callee(n-1);
}

console.log(factorial(2));
console.log(factorial(5));


