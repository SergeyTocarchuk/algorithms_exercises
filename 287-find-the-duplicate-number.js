/**
287. Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only constant extra space.
*/

function findDuplicate(nums){
  while( nums[0] !== nums[nums[0]] ){
    let temp = nums[nums[0]];
    nums[nums[0]] = nums[0];
    nums[0] = temp;
  }
  return nums[0];

//   const obj = {};
//   for( let i = 0; i < nums.length; i++ ){
//     const key = nums[i];
//     obj[key] ? obj[key]++ : obj[key] = 1;
//     if( obj[key] === 2 ) return key;
//   }
}

console.log(findDuplicate([1,3,4,2,2]))