/**
541. Reverse String II
https://leetcode.com/problems/reverse-string-ii/

Given a string s and an integer k, reverse the first k characters for every 2k characters 
counting from the start of the string.
If there are fewer than k characters left, reverse all of them. 
If there are less than 2k but greater than or equal to k characters, 
then reverse the first k characters and left the other as original.
*/

function reverseString(str, k){
  let chars = str.split('');
  for( let i = 0; i < chars.length; i += 2*k ){
    let start = i;
    let end = Math.min(i + k - 1, chars.length - 1);
    while( start < end ){
      let temp = chars[start];
      chars[start] = chars[end];
      chars[end] = temp;
      start++;
      end--;
    }
  }
  let result = chars.join('');
  return result;
}

console.log(reverseString('abcdefg', 2))