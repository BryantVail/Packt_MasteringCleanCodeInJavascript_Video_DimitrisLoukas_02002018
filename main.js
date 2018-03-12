//CleanCodeWJavaScript_CleanFunctions_AllAboutThis_new keyword
/*
    The content of 'this'
    avoid 'buggy' code regarding 'this'

*/
// 1.Function definition location DOES NOT matter
//    -its the call site

///////////////////////////////////
////////'new' keyword //////////////
///////////////////////////////////

function Person(firstName, lastName, age){
  this.firstName  = firstName;
  this.lastName   = lastName;
  this.age        = age;
  console.log(this);
}

let p = new Person('Bry', 'Vail', 28);
console.log(p);























































