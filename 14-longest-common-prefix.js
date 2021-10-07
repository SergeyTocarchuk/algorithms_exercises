// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(str){
  // horizontal scanning
//   let prefix = str[0];
//   for( let i = 1; i < str.length; i++ ){
//     for( let j = 0; j < prefix.length; j++ ){
//       if( prefix[j] !== str[i][j] ){
//         prefix = str[i].slice(0, j)
//       }
//     }
//   }
//   return prefix;

  // vertical scanning
  for( let i = 0; i < str[0].length; i++ ){
    for( let j = 1; j < str.length; j++ ){
      if( str[0][i] !== str[j][i] ){
        return str[0].slice(0, i); 
      }
    }
  }
  return str[0];
}

console.log(longestCommonPrefix(["flower","flow","flight"]))