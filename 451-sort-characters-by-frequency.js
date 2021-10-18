/**
451. Sort Characters By Frequency
https://leetcode.com/problems/sort-characters-by-frequency/

Given a string s, sort it in decreasing order based on the frequency of the characters. 
The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.
*/

function frequencySort(str){
  const object = {};
  let max = 0;
  let char;
  let result = '';
//   for( let i = 0; i < str.length; i++ ){
//     const key = str[i];
//     if( object[key] ){
//       object[key]++;
//     } else {
//       object[key] = 1;
//     }
//   }
  for( let key of str ){
    object[key] ? object[key]++ : object[key] = 1;
  }
  while( Object.keys(object).length > 0 ){
    max = 0;
    for( let key in object ){
      if( max < object[key] ){
        char = key;
      }
      max = Math.max(max, object[key]);
    }
    char = char.toString();
    for( let j = 0; j < max; j++ ){
      result += char;
    }
    delete object[char];
  }
  return result;
}

console.log(frequencySort('tree'))