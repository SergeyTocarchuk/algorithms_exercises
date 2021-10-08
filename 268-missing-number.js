// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

function missingNumber(nums){
  const map = new Map();
  for( let i = 0; i < nums.length; i++ ){
    map.set(nums[i], 1);
  }
  for( let j = 0; j < nums.length + 1; j++ ){
    if( !map.has(j) ){
      return j;
    }
  }
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))