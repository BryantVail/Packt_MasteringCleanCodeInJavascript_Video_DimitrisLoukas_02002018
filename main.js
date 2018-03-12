"use strict";//always use strict

//FunctionalProgramming_PureFunction_ini
/*
      In this Section:
         Intro, 
         "Pure" function,     x
         Object.assign,
         Map & forEach,
         Reducing an array
         Filtering Arrays
      Terms:
        functional Programming:
            3 principals
                  Pure Functions
                        same input/same output
        Pure Function:
        Immutability
        side effects
            function modifies the program outside the function
*/
//
//   FunctionalProgramming_Intro_ini
//

///////////////////////////////////
/////// Functional Programming/////
///////  PureFunctions    /////////
///////////////////////////////////
/*
Pure functions
Combine Pure functions to avoid side effects
Accepting Arguments & Returning Values
*/
class ProfileManager {
      constructor(user){
            this.user         =user;
            this.profileUrl   ="";
          //this.username     ="";//removed
          //this.domain       ="";//removed
      }//end constructor
      
      createUserName(){
            let random = Math.floor(Math.random()*100000);//not pure: with the same input, the result could be different
            this.username = `${this.user.fistName}.${this.user.lastName}.${random}`;
      }//end createUserName
      
      createProfileUrl(){
            this.profileUrl = `${this.domain}${this.username}`;//assumes that 'this.username'
      }//end createProfile
}//end ProfileManager

let user = {
      id:1491141, firstName:"Bryant", lastName:"Vail"
}//end user

let manager = new ProfileManager(user);
manager.createUsername();
manager.createProfileUrl;
console.log(manager);






/////////////Video 1 intro below ////////////////////

function sum(a,b){
      return a+b;
}//end sum
//only returns value, does not alter values, 

class Calculator {
            constructor(){
                  this.previousResult = null;
            }//end constructor
      
      add(a,b){
            this.previousResult = a+b;//side effect
            return this.previousResult;
      }//end add
}//end calculator

////Shared State
      //classes
      //global variables
      //closures
      //variables passed by reference
            //both variables are able to edit.

 


















































