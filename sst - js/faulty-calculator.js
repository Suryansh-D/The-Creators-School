let random = Math.random();

let a = prompt("Enter a number");
let b = prompt("Enter another number");
let c = prompt("Enter operator");


let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(random> 0.1){
    // do correct calculation for 90% of the time
    alert('The result is ' + eval(`${a} ${c} ${b}`));

}else{
    // do wrong calculation for 10% of the time
    c = obj[c];
    alert('The result is ' + eval(`${a} ${c} ${b}`));
}