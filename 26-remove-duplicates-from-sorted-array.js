/**
26. Remove Duplicates from Sorted Array
https://leetcode.com/problems/remove-duplicates-from-sorted-array/

Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same.
*/

function removeDuplicates(nums){
  if( nums.length === 0 ) return 0;
  let i = 0;
  for( let j = 0; j < nums.length; j++ ){
    if( nums[i] !== nums[j] ){
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicates([1,1,2]))