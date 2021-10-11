/**
66. Plus One
https://leetcode.com/problems/plus-one/

You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

function plusOne(nums){
  let i = nums.length - 1
  while( nums[i] === 9 ){
    nums[i] = 0;
    i--;
  } 
  if( i >= 0 ){
    nums[i]++;
  } else{
    nums.unshift(1);
  }
  return nums;
}

console.log(plusOne([9,1,9,9]))