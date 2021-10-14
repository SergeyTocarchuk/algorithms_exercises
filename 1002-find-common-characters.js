/**
1002. Find Common Characters
https://leetcode.com/problems/find-common-characters/

Given a string array words, return an array of all characters 
that show up in all strings within the words (including duplicates). 
You may return the answer in any order.
*/

function findCommonChars(words){
  let result = [];
  let prevObject = {};
  let firstWord = words[0];
  
  for( let i = 0; i < firstWord.length; i++ ){
    const key = firstWord[i];
    if( prevObject[key] ){
      prevObject[key]++;
    } else {
      prevObject[key] = 1;
    }
  }

  for( let j = 1; j < words.length; j++ ){
    const word = words[j];
    const currObject = {};
    for( let k = 0; k < word.length; k++ ){
      const char = word[k];
      if( prevObject[char] ){
        if( currObject[char] ){
          currObject[char]++
        } else {
        currObject[char] = 1
        }
      prevObject[char]--;
      if( prevObject[char] === 0 ) delete prevObject[char];
      }
    }
    prevObject = currObject;
  }
  for( let key in prevObject ){
    while( prevObject[key] > 0 ){
    result.push(key);
    prevObject[key]--;
    }
  }
  return result;
}

console.log(findCommonChars(["bella","label","roller"]))