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
    c:3,
  };

  function test(){
    console.log(this.a);
  }
  test();//global call

  obj.test = test;//a reference to the 'function test(){'
  obj.test();//call from the context of the object
  //console results:
  //  92
  //  1

  test.call(obj); //additional parameters are sent in as an array[]
  // obj.test = test; &&  obj.test(); at once
  //function test, call with the 'this' context of 'obj'

  test.apply(obj, );//additional parameters ar passed in as a set of arguments



