/**
1213. Intersection of Three Sorted Arrays
https://leetcode.com/problems/intersection-of-three-sorted-arrays/

Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, 
return a sorted array of only the integers that appeared in all three arrays.
*/

function arraysIntersection(nums1, nums2, nums3){
  // with Hash
//   const object = {}
//   let result = []
//   for( let i = 0; i < nums1.length; i++ ){
//     const key = nums1[i];
//     if( !(object[key]) ){
//       object[key] = 1;
//     }
//   }
//   for( let j = 0; j < nums2.length; j++ ){
//     const key = nums2[j];
//     if( object[key] === 1 ){
//       object[key] = 2;
//     }
//   }
//   for( let k = 0; k < nums3.length; k++ ){
//     const key = nums3[k];
//     if( object[key] === 2 ){
//       object[key] = 3;
//       result.push(key);
//     }
//   }
//   return result;

  // three pointers
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let result = [];
  while( p1 < nums1.length && p2 < nums2.length && p3 < nums3.length ){
    if( nums1[p1] === nums2[p2] && nums2[p2] === nums3[p3] ){
      result.push(nums1[p1]);
      p1++;
      p2++;
      p3++;
    } else{
      if( nums1[p1] < nums2[p2] ) {
        p1++;
      } else if( nums2[p2] < nums3[p3] ){
        p2++;
      } else {
        p3++;
      }
    }
  }
  return result;
}

console.log(arraysIntersection([1,2,3,4,5], [1,2,5,7,9], [1,3,4,5,8]))