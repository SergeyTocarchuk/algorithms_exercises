/**
344. Reverse String
https://leetcode.com/problems/reverse-string/

Write a function that reverses a string. The input string is given as an array of characters s.
*/

function reverseString(str){
  let left = 0;
  let right = str.length - 1;
  while( left < right ){
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }
  return str;
}

console.log(reverseString(["h","e","l","l","o"]))