// 13. Roman to Integer

function romanToInt(s){
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  let total = 0;
  let i = 0;
  let arr = s.split('');

  while( i < arr.length ){
    let val = map[arr[i]];
    if( map[arr[i]] && val < map[arr[i + 1]] ){
      total = total + (map[arr[i + 1]] - val);
      i = i + 2;
    }
    else {
      total += val;
      i++;
    }
  }
  return total;
}

console.log(romanToInt('XC'))