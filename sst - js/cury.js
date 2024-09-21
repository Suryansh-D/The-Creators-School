var cury = function( fn , fixedValue){
    return function(value){
        return fn(fixedValue, value);
    }}

    var add = function(a,b){
        return a + b;
    }
    var add10 = cury(add, 10);

    var multi = function(a,b){
        return a*b;
    }
    var multi2 = cury(multi, 2);
  
    var addAll = function(arguments){
        return arguments.reduce((a,b) => a+b);
    }

    var myltiAll = function(arguments){
        return arguments.reduce((a,b) => a*b);
    
    }

console.log(add10(20));
console.log(multi2(5));
console.log(addAll([1,2,3,4,5]));
console.log(myltiAll([1,2,3,4,5]));

//How is it working step by step ?
/*
  1. cury function is called with add and 10 as arguments.
  2. cury function returns a function with value as argument.
  3. The returned function is called with 20 as argument.
  4. The returned function calls the add function with 10 and 20 as arguments.
  5. The add function returns 30.
  6. The returned function returns 30.

*/
 



