/**
137. Single Number II
https://leetcode.com/problems/single-number-ii/

Given an integer array nums where every element appears three times except for one, which appears exactly once. 
Find the single element and return it.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

function singleNumber(num){
  const obj = {};
  for( let i = 0; i < num.length; i++ ){
    const key = num[i];
    obj[key] ? obj[key]++ : obj[key] = 1;
    if( obj[key] >= 3 ) delete obj[key];
  }
  return Object.keys(obj);
}

console.log(singleNumber([2,2,3,2]))