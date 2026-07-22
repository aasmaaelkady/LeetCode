/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i:number=m-1, j:number=n-1,  curr=nums1.length-1;
    while(i>=0 && j>= 0){
        if(nums1[i] < nums2[j]){
            nums1[curr] = nums2[j]
            j--;
        } else {
            nums1[curr] = nums1[i]
            i--;
        } 
         curr--;
    }

    while(j>=0){
        nums1[curr] = nums2[j];
        curr--;
        j--;
    }
};