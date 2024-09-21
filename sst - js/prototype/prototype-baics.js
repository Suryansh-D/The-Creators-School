var Dog = function(config){
    this.name = config.name;
};

Dog.prototype.breed = "Indian";
Dog.prototype.sayHello = function(){
    //console.log(this.name + " says woof");
}

var Jamy = new Dog({
    name:"Jam"
})

var GermanShepard = function(config){

}

Jamy.sayHello();

//making a sum fn in extending array prototype

Array.prototype.sum = function() {
    var ans = 0;
    for(var i = 0; i < this.length; i++){
        ans += this[i];
    }
    return ans;
}

var arr = [1,2,3];

console.log(arr.sum()); 

String.prototype.firstCap = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var str = "string";

console.log(str.firstCap());