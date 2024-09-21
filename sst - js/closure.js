var counter = 0;
var myfun = function() {
        var counter = 0;
    var lvl2fun = function() {
        counter++;
        console.log(counter);
    }
   
    lvl2fun();
};

myfun();
console.log(counter);
