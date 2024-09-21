var my_dog = {
    name :"billu",
    breed:"bengali",
    color : "rainbow"
};

var my_puppy={
    name:"chu-chu"
}

my_puppy.__proto__ = my_dog;

console.log(my_dog);
console.log(my_puppy);