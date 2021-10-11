/**
53. Maximum Subarray
https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.
A subarray is a contiguous part of an array.
*/

function maxSubArray(nums){
  let currentSubArray = nums[0];
  let maxSubArray = nums[0];
  for( let i = 1; i < nums.length; i++ ){
    let num = nums[i];
    currentSubArray = Math.max(num, currentSubArray + num);
    maxSubArray = Math.max(maxSubArray, currentSubArray);
  }
  return maxSubArray;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))