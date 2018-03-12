//init Mastering Clean Code in Javascript_Clean Functions
/*
    Write Cleaner Functions
    work w/arguments & return values in an optimal way.
    CleanCodeWJavaScript_CleanFunctions_12min_tip12-defaultArguments
*/

////////////////////////////
/*
  Tip#12-Default Arguments
    -Object.assign, 
    -'Spread' operator
    -'scalar values'
*/
  
function draw(element, config){
    config.width = config.width ||200;
    config.height = config.height || 200;
    config.margin = config.margin || 28;
    config.padding = config.padding || 14;
    console.log(config);
}

draw(null, {margin:100, padding:50});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  