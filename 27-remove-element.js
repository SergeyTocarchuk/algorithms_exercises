/**
27. Remove Element
https://leetcode.com/problems/remove-element/

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The relative order of the elements may be changed.
*/

function removeElement(nums, target){
  let i = 0;
  let j = 0;
  while( j < nums.length ){
    if( nums[j] !== target ){
      nums[i] = nums[j];
      i++
    }
    j++;
  }
  return i;
//   to return array without target element:
//   for( let k = nums.length; k > i; k-- ){
//     nums.pop();
//   }
//   return nums;
}

console.log(removeElement([0,1,2], 2))