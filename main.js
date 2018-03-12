"use strict";
//CleanCodeWJavaScript_CleanFunctions_AllAboutThis_ObjectsAndClasses_ES6vsPrototypal
/*
    The content of 'this'
    avoid 'buggy' code regarding 'this'

*/
// tip#15:
//    Use Object.freeze instead of 'const'
//

///////////////////////////////////
/////// Objects & Classes /////////
/////// ES6vsPrototypal   /////////
///////////////////////////////////

function Pet(name){
  this.name = name;
}
Pet.prototype.eat = function(){
  console.log(`${this.name} is eating...`);
}

function Dog(name, breed){
  Pet.call(this, name);//call 'Pet' constructor with the 'this'|| 'Dog' function context, passing in 'name'
  this.breed = breed;
}

Dog.prototype = Object.create(Pet.prototype);

Dog.prototype.play = function(){
  console.log(`${this.name} is playing...`);
}

var max = new Dog("Max", "Beagle");
max.eat();
max.play();
console.log(max);
























































