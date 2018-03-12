"use strict";
//CleanCodeWJavaScript_CleanFunctions_AllAboutThis_ObjectsAndClasses_ES6vsPrototypal
/*
    The content of 'this'
    avoid 'buggy' code regarding 'this'

*/
// tip#14:
//    Use Property Descriptors to Create 'Read only' fields
//

///////////////////////////////////
/////// Objects & Classes /////////
///////       ES6         /////////
///////////////////////////////////

class Pet{
  constructor(name){
    this.name = name;
  }

  eat(){
    console.log(`${this.name} is eating...`);
  }

  speak(){
    console.log(`${this.name} is speaking...`);
  }

}//end Pet

class Dog extends Pet{
  constructor(name, breed){
    super(name);
    this.breed = breed;
  }

  play(){
    console.log(`${this.name} is playing...`);
  }
  speak(){
    console.log(`${this.name} is barking...`);
  }

}//end Dog

let max = new Dog('max', 'beagle');
max.speak();
max.eat();
max.play();
console.log(max);



















































