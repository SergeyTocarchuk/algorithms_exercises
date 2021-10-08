// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

function containsDuplicate(nums) {
  const map = new Map();
  for( let i = 0; i < nums.length; i++ ){
    if( map.has(nums[i]) ){
      return true;
    } else {
      map.set(nums[i], 1);
    }
  }
  return false;
}

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))