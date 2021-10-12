/**
163. Missing Ranges
https://leetcode.com/problems/missing-ranges/

You are given an inclusive range [lower, upper] and a sorted unique integer array nums, 
where all elements are in the inclusive range.
A number x is considered missing if x is in the range [lower, upper] and x is not in nums.
Return the smallest sorted list of ranges that cover every missing number exactly. 
That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
*/

function findMissingRanges(nums, lower, upper){
  let result = [];
  if( nums[0] !== lower ) nums.unshift(lower - 1);
  if( nums[nums.length - 1] !== upper ) nums.push(upper + 1);

  for( let i = 0; i < nums.length - 1; i++ ){
    if( nums[i] + 1 === nums[i+1] || nums[i] === nums[i+1] ) continue;
    else if( nums[i] + 1 === nums[i+1] - 1 ){
      result.push('' + (nums[i] + 1))
    } else{
      result.push('' + (nums[i] + 1) + '->' + (nums[i+1] - 1))
    }
  }
  return result;
}

console.log(findMissingRanges([0,1,3,50,75],0,99))