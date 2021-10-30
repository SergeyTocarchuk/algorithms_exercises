/** 977. Squares of a Sorted Array
https://leetcode.com/problems/squares-of-a-sorted-array/

Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

function sortedSquares(nums){
  let result = [],
      n = nums.length,
      left = 0,
      right = n - 1;
  for( let i = n - 1; i >= 0; i-- ){
    let square;
    if( Math.abs(nums[left]) < Math.abs(nums[right]) ){
      square = nums[right];
      right--;
    } else {
      square = nums[left];
      left++;
    }
    result[i] = square * square;
  }
  return result;
}

console.log(sortedSquares([-4,-1,0,3,10]))