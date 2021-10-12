// 350. Intersection of Two Arrays II
// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays 
// and you may return the result in any order.
// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

function intersect(arr1, arr2){
  // If arr1 is larger than arr2, swap the arrays
  if( arr1.length > arr2.length ) {
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  }
  
  let result = [];
  // each element in nums1 add it to the hash map
//   let map = new Map();
//   for( let i = 0; i < arr1.length; i++ ){
//     map.set(arr1[i], map.get(arr1[i]) + 1 || 1);
//   }
//   for( let j = 0; j < arr2.length; j++ ){
//     if( map.has(arr2[j]) ){
//       result.push(arr2[j]);
//       // Decrement the count in the hash map
//       map.set(arr2[j], map.get(arr2[j]) - 1)
//       if( map.get(arr2[j]) === 0 ) map.delete(arr2[j])
//     }
//   }
  let object = {};
  for( let i = 0; i < arr1.length; i++ ){
    const key = arr1[i];
    if( object[key] ){
      object[key]++;
    } else{
      object[key] = 1;
    }
  }
  for( let j = 0; j < arr2.length; j++ ){
    const prop = arr2[j]
    if( object[prop] ){
      result.push(prop);
      object[prop]--;
      if( object[prop] === 0 ) delete object[prop];
    }
  }
  return result;
}

console.log(intersect([1,2,2,1,4,5,7], [2,2,7]))