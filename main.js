"use strict";//always use strict

//FunctionalProgramming_PureFunction_ini
/*
      Object.assign(target, ...sources);
            copies all numerable 'own' properties of the sources, to the object.
            returns the target object, a shallow clone.
            **!! references to other objects or variables are also cloned.
            
      The 'spread' operator(...)
            copies all 'enumerable properties'      
*/
///////////////////////////////////
/////// Functional Programming/////
///////  Object.assign(target, ...sources)    /////////
///////////////////////////////////

let readings = {
      coreTemp:         74,
      additionalTemp:   80,
      readingA:         178,
      readingB:         120,
      readingC:         -190
}//end let readings

function adjustReadings(readings){
      readings.readingA-=20;//not totally pure just the good parts
      readings.readingB += readings.coreTemp/2; 
      return readings;
}//adjustReadings

function testReadingA(readingA){
      return readingA >=170;
}//end testReadingA

console.log("readings before: ", readings);
let newReadings = adjustReadings({...readings});

console.log(testReadingA(readings.readingA));
console.log("Readings after:\t", readings);
console.log("New Readings:\t",newReadings);
























////////////////Video 2 Pure Functions (below) //////////////////////////////////////////////////
/*
Pure functions
Combine Pure functions to avoid side effects
Accepting Arguments & Returning Values
*/
class ProfileManager {
      constructor(user){
            this.user         =user;
          //this.profileUrl   ="";//removed
          //this.username     ="";//removed
          //this.domain       ="";//removed
      }//end constructor
      
            //should be able to take a parameter instead of side effects
      createUserName(user){
            //random removed, must find a better way  (below)
            //let random = Math.floor(Math.random()*100000);//not pure: with the same input, the result could be different
            
            return `${user.fistName}.${user.lastName}.${user.id}`;
      }//end createUserName
      
      createProfileUrl(domain, username){
            return `${domain}${username}`;//assumes that 'this.username'
      }//end createProfile
}//end ProfileManager

let user = {
      id:1491141, firstName:"Bryant", lastName:"Vail"
}//end user

let profileUrl = manager.createProfileUrl("https://mySocialMedia.com", createUsername(user));

let manager = new ProfileManager(user);
manager.createUsername();
manager.createProfileUrl;
console.log(manager);








/////////////Video 1 intro below ////////////////////////////////////////////////////////////////////////////////

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

 


















































