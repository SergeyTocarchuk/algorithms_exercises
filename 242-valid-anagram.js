// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(str1, str2){
  //   if( str1.length !== str2.length ) return false;
  //   const map = new Map();
  //   for( let i = 0; i < str1.length; i++ ){
  //     map.set(str1[i], map.get(str1[i]) + 1 || 1)
  //   }
  //   for( let j = 0; j < str2.length; j++ ){
  //     if( map.has(str2[j]) ){
  //       map.set( str2[j], map.get(str2[j]) - 1 )
  //       if( map.get(str2[j]) === 0 ) map.delete(str2[j])
  //     } else return false;
  //   }
  //   if( map.size === 0 ) return true;
  //   else return false;
    
    if( str1.length !== str2.length ) return false;
    const obj = {}
    for( let i = 0; i < str1.length; i++ ){
      const key1 = str1[i];
      const key2 = str2[i];
      obj[key1] ? obj[key1]++ : obj[key1] = 1;
      if( obj[key1] === 0 ) delete obj[key1];
      obj[key2] ? obj[key2]-- : obj[key2] = -1;
      if( obj[key2] === 0 ) delete obj[key2]; 
    }
    if( Object.keys(obj).length === 0 ) return true;
    else return false; 
  }
  
  console.log(isAnagram('racecar', 'racecal'))