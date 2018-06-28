//CleanCodeWJavaScript_CleanFunctions_AllAboutThis_init
/*
    The content of 'this'
    avoid 'buggy' code regarding 'this'

*/
// 1.Function definition location DOES NOT matter
//    -its the call site


    var generic = {};

    function test(){
        console.log(this.a);
    }

    let a = 92;

    generic.test = test;
    
    generic.test();
    

    var obj = {
        a:1,
        b:2,
        c:3
    };



    test();

    obj.test = test;
    obj.test();





