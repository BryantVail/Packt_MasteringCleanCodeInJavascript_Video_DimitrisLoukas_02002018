"use strict";
//CleanCodeWJavaScript_CleanFunctions_AllAboutThis_ObjectsAndClasses_Object.freeze
/*
    The content of 'this'
    avoid 'buggy' code regarding 'this'

*/
// tip#15:
//    Use Object.freeze instead of 'const'
//

///////////////////////////////////
/////// Objects & Classes /////////
///////  Object.freeze    /////////
///////////////////////////////////

//const ensures that the variable declared is pointing to the same object, 
//it does not govern the maintenance of the values within the object
/*
  config = {};//error bc I have tried to change the object associated w/config
*/

const config = {
  fbApiKey: 'snfa9f7yh43f30j03t4hg34',
  googleApiKey:'4jhu954htgh39g343g',
  linkedInApiKey:'jo2045349jnfinl3436787'
};
Object.freeze(config);//cannot change values of the 'config' object's properties, if the apiKey is changed, then nothing will happen

console.log(config);

config.googleApiKey = "";//TypeError: Cannot assign to read only property 'googleApiKey' of object '#<Object>'
console.log(config);

/*
{ fbApiKey: 'snfa9f7yh43f30j03t4hg34',
  googleApiKey: '4jhu954htgh39g343g',
  linkedInApiKey: 'jo2045349jnfinl3436787' }

{ fbApiKey: 'snfa9f7yh43f30j03t4hg34',
  googleApiKey: '',
  linkedInApiKey: 'jo2045349jnfinl3436787' }
*/




















































