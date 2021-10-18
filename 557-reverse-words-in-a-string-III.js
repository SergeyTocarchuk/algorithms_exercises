/**
557. Reverse Words in a String III
https://leetcode.com/problems/reverse-words-in-a-string-iii/

Given a string s, reverse the order of characters in each word within a sentence 
while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

function reverseWords(str){
  let words = str.split(" ");
  let currentResult = [];
  let reversedWord;
  for( let i = 0; i < words.length; i++ ){
    let chars = words[i].split('');
    let start = 0;
    let end = chars.length - 1;
    while( start < end ){
      let temp = chars[start];
      chars[start] = chars[end];
      chars[end] = temp;
      start++;
      end--;
    }
    reversedWord = chars.join("");
    currentResult.push(reversedWord);
  }
  return currentResult.join(" ");
}

console.log(reverseWords("Let's take LeetCode contest"))