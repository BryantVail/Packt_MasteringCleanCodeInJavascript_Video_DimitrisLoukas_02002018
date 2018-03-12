"use strict";
//CleanCodeWJavaScript_CleanFunctions_AllAboutThis_ObjectsAndClasses_init
/*
    The content of 'this'
    avoid 'buggy' code regarding 'this'

*/
// tip#13:
//    Use Property Descriptors to Create 'Read only' fields
//

///////////////////////////////////
////////Objects & Classes /////////
///////////////////////////////////

var person = {
  firstName : 'John',
  lastName  : 'Smith',

};

Object.defineProperty(person, 'age',{
  value:28,
  writeable:false,
  enumerable:true,
  configurable:false
});

console.log(person);

//person.age = 44; //will be an error in "strict mode";
console.log(person);






















































