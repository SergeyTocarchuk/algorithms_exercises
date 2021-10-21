/**
345. Reverse Vowels of a String
https://leetcode.com/problems/reverse-vowels-of-a-string/

Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

*/

function reverseVowels(str){
  //edge case for white spaces
      if(str.length<=1) return str
      let vowelMap = new Map([
          ["a","a"],
          ["e","e"],
          ["i","i"],
          ["o","o"],
          ["u","u"],
          ["A","A"],
          ["E","E"],
          ["I","I"],
          ["O","O"],
          ["U","U"]
      ])
      let left = 0
      let right = str.length-1
      let rightStr =""
      let leftStr =""
      while(left<right){
          //they both have vowels, so we replace them, reversing their order
          if(vowelMap.has(str[left]) && vowelMap.has(str[right])){
              rightStr = str[left] + rightStr
              leftStr = leftStr + str[right]
              left++
              right--
          }
          //makes right side wait, until left side reaches next vowel
          else if(vowelMap.has(str[left])){
              rightStr = str[right] + rightStr
              right--
          }
          //make left side wait, until right side reaches next vowel
          else if(vowelMap.has(str[right])){
              leftStr = leftStr + str[left] 
              left++
          }
          //no vowels on either side, just consonants and non-letter
          else{
              leftStr = leftStr + str[left] 
              rightStr = str[right] + rightStr
              left++
              right--
          }
          //correct for any skipped values at the end
          if(left === right) leftStr = leftStr + str[left]
      }
      
      //add both side of str together
      return leftStr + rightStr
  }
  
  console.log(reverseVowels('hello'))