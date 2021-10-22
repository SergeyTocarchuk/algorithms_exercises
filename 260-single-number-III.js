/**
260. Single Number III
https://leetcode.com/problems/single-number-iii/

Given an integer array nums, in which exactly two elements appear only once and 
all the other elements appear exactly twice. 
Find the two elements that appear only once. You can return the answer in any order.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.
*/

function singleNumber(nums){
  const obj = {};
  let result = [];
  for( let i = 0; i < nums.length; i++ ){
    const key = nums[i];
    obj[key] ? obj[key]++ : obj[key] = 1;
  }
  for( const [key,value] of Object.entries(obj) ){
    if( value === 1 ){
      result.push(key);
    }
  }
  return result;
}

console.log(singleNumber([1,2,1,3,2,5]))