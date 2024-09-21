
//memoizer fn
var memoizer = function(fn) {
    var cache = {};
    return function(n) {
        if (cache[n] === undefined) {
            cache[n] = fn(n);
        }
        return cache[n];
    }
}

var fib = memoizer(function(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
});

var fib_non_memo = function(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fib_non_memo(n - 1) + fib_non_memo(n - 2);
    }
}

console.log(fib(400));
console.log(fib_non_memo(4 )); // lagbhag 10s zyada time lega

// use cury
var cury = function(fn, fixedValue) {
    return function(value) {
        return fn(fixedValue, value);
    }
}

