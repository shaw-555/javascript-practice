function fibon(max) {
    var a = 0, b = 1, arr = [0, 1];
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    return arr[arr.length - 1];
}

var test = fibon(10);
console.log(test);


function* fib(max) {
    var a = 0, b = 1, arr = [0, 1], n = 0;
    while (n < max) {
        [a, b] = [b, a + b];
        n++;
    }
    return b;
}

let fibonacci = fib(8);
console.log(fibonacci.next());
