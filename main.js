"use strict";//always use strict

//FunctionalProgramming_Intro_ini
/*
      In this Section:
         Intro, 
         "Pure" function,
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
///////  intro            /////////
///////////////////////////////////

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




















































