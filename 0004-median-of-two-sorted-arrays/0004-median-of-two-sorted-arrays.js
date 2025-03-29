/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr = [...nums1, ...nums2].sort((a,b)=> a-b)
    let n  =  mergedArr.length;
    let median ;
    for(let i=0; i<n; i++){
        if(n % 2 === 0){
            let mid1 = n/2
            let mid2 = (n/2) - 1
            median = (mergedArr[mid1]+mergedArr[mid2]) / 2
        }else{
            let mid =Math.floor(n/2) 
            median = mergedArr[mid]
        }
    }
    return median
};