// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

function containsDuplicate(nums) {
  //   const map = new Map();
  //   for( let i = 0; i < nums.length; i++ ){
  //     if( map.has(nums[i]) ){
  //       return true;
  //     } else {
  //       map.set(nums[i], 1);
  //     }
  //   }
  
    const object = {};
    for( let i = 0; i < nums.length; i++ ){
      const key = nums[i];
      if( object[key] ){
        delete object[key];
      } else {
        object[key] = true;
      }
    }
    for( let key in object ){
      if( object[key] ) {
        return false;
      }
    }
    return true;
  }
  
  console.log(containsDuplicate([1,3,3,2,2,1]))