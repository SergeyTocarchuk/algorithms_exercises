/**
283. Move Zeroes
https://leetcode.com/problems/move-zeroes/

Given an integer array nums, move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

function moveZeroes(nums){
  let i = 0;
  let j = 0;
  let temp;
  while( j < nums.length ){
    if( nums[j] !== 0 ){
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
    j++;
  }
  return nums;
}

console.log(moveZeroes([0,1,0,3,12]))