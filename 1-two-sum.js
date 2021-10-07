// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice. 
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(arr, target){
  // brute force
//   for (let i = 0; i < arr.length - 1; i++){
//     for( let j = i + 1; j < arr.length; j++ ){
//       if( arr[i] + arr[j] === target ){
//         return [i,j];
//       }
//     }
//   }
//   return false;

  // Hash Map
  let map = new Map();
  for( let i = 0; i < arr.length; i++ ){
    const complement = target - arr[i];
    if( map.has(complement) ){
      return [i, map.get(complement)];
    }
    map.set(arr[i], i);
  }
  return false;
}

console.log(twoSum([2,7,11,15], 26))