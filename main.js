//reduce, reduce will always return 1 value

let numbers = [
  2,9,8,7,6
 ];//end numbers

function numbersSum(numbers){
  let sum = 0;
  for(let num of numbers){
    if(num % 2 ==0){
      sum +=num/2;
    }
    else{
      sum +=num;
    }//end else
  }//end for(let num of numbers){
  return sum;//should be 24
  
}//end numbersSum


































