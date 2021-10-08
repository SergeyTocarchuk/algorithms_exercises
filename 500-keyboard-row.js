/**
500. Keyboard Row
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
*/

function findWords(words){
  const map = new Map([
        ['a', 2],
        ['b', 3],
        ['c', 3],
        ['d', 2],
        ['e', 1],
        ['f', 2],
        ['g', 2],
        ['h', 2],
        ['i', 1],
        ['j', 2],
        ['k', 2],
        ['l', 2],
        ['m', 3],
        ['n', 3],
        ['o', 1],
        ['p', 1],
        ['q', 1],
        ['r', 1],
        ['s', 2],
        ['t', 1],
        ['u', 1],
        ['v', 3],
        ['w', 1],
        ['x', 3],
        ['y', 1],
        ['z', 3],
    ]); 

  let result = [];

  for( let i = 0; i < words.length; i++ ){
    let row = map.get(words[i].charAt(0).toLowerCase());
    let inOneRow = true;
    for( let j = 1; j < words[i].length; j++ ){
      let char = words[i].charAt(j).toLowerCase();
      if( map.get(char) !== row ){
        inOneRow = false;
        break;
      }
    }
    if( inOneRow ){
      result.push(words[i]);
    }
  }
  return result;
}

console.log(findWords(["Hello","Alaska","Dad","Peace"]))