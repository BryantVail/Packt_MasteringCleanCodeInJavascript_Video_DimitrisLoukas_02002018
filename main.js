//CleanCodeWJavaScript_CleanFunctions_AllAboutThis_HardBinding
/*
    The content of 'this'
    avoid 'buggy' code regarding 'this'

*/
// 1.Function definition location DOES NOT matter
//    -its the call site

///////////////////////////////////
////////Hard Binding //////////////
///////////////////////////////////

var obj = {
  a:1,
  b:2,
  c:3
}

function test(){
  console.log(this.a);
  console.log(this.b);
  console.log(this.c);
}

function callMeLater(cb){
  setTimeout(()=> {
    cb();
  }, 3000);
}//end function callMeLater(cb){

callMeLater(test.bind(obj));//no matter the context of the calling function, test is 'bound' to the obj 'this' context
// .bind() DOES NOT call the function
// returns a ref to the function w/the 'this' keyword set to the function specified

























































