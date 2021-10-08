// 169. Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

function majorityElement(nums){
  const map = new Map();
  for( let i = 0; i < nums.length; i++ ){
    map.set(nums[i], map.get(nums[i]) + 1 || 1)
    if( map.get(nums[i]) > nums.length / 2) return nums[i];
  }
}

console.log(majorityElement([2,2,1,1,1,2,2,1,1,1,1]))