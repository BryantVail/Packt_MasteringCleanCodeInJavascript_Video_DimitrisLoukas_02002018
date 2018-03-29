//reduce, reduce will always return 1 value

let numbers = [
  2,9,8,7,6
 ];//end numbers


function numberSum(numbers){
  return numbers.reduce((accumulator, current) => {
    if(isEven(current)){
      return accumulator +current /2; 
    }
    else{
      return accumulator + current;
    }//end else
  },0);//end numbers.reduce
}
//function numbersSum(numbers){
//  let sum = 0;
//  for(let num of numbers){
//    if(num % 2 ==0){
//      sum +=num/2;
//    }
//    else{
//      sum +=num;
//   }//end else
//  }//end for(let num of numbers){
//  return sum;//should be 24
  
  function isEven(num){
     return (num % 2 ==0)//return true/false 
  }
  
}//end numbersSum


































