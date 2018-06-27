//CleanCodeWJavaScript_CleanFunctions_AllAboutThis_init
/*
    The content of 'this'
    avoid 'buggy' code regarding 'this'

*/
// 1.Function definition location DOES NOT matter
//    -its the call site



var a = 92;

var obj = {
  a:1,
  b:2,
  c:3
};

function test(){
  console.log(this.a);
}

test();

obj.test = test;
obj.test();



