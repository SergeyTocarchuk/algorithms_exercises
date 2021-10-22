/**
412. Fizz Buzz
https://leetcode.com/problems/fizz-buzz/

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.
*/

function fizzBuzz(num){
  //   let result = [];
  //   for( let i = 1; i <= num; i++ ){
  //     if( (i % 3 == 0) && (i % 5 == 0) ){
  //       result.push('FizzBuzz');
  //     } else if( i % 3 == 0 ){
  //       result.push('Fizz');
  //     } else if( i % 5 == 0 ){
  //       result.push('Buzz');
  //     } else{
  //       result.push(i);
  //     }
  //   }
  //   return result;
  
  // using Object
    const data = {
      3: "Fizz",
      5: "Buzz"
    }
    let result = [];
    for( let i = 1; i <= num; i++ ){
    let currentAns = '';
      for( const [key, value] of Object.entries(data) ){
        if( i % key == 0 ){
          currentAns += value;
        }
      }
      if( !currentAns ){
        currentAns += i;
      }
      result.push(currentAns);
    }
    return result;
  }
  
  console.log(fizzBuzz(15))