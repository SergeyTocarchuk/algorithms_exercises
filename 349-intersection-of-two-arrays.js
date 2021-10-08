// 349. Intersection of Two Arrays
// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

function intersect(arr1, arr2){
  const map = new Map();
  let result = [];

  for( let i = 0; i < arr1.length; i++ ){
    if( !map.has(arr1[i]) ){
      map.set(arr1[i], 1)
    }
  }
  for( let j = 0; j < arr2.length; j++ ){
    if( map.has(arr2[j]) ){
      result.push(arr2[j]);
      map.delete(arr2[j]);
    }
  }
  return result;
}

console.log(intersect([1,2,2,1,4,5,7], [2,2,7]))