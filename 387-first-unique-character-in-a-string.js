// Given a string s, find the first non-repeating character in it and return its index. 
// If it does not exist, return -1.

function firstUniqChar(str){
  const map = new Map();
  for( let i = 0; i < str.length; i++ ){
    map.set(str[i], map.get(str[i])+1 || 1)
  }
  for( let i = 0; i < str.length; i++ ){
    if( map.get(str[i]) === 1 ){
      return i;
    }
  }
  return -1;
}

console.log(firstUniqChar('propper'));