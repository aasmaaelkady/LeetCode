/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): number[] {
    let curr: number = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[curr] !== 0 && nums[i] == 0){
            let temp = nums[i];
            nums[i] = nums[curr];
            nums[curr]= temp
            curr++
        }
        if(nums[i] === 0) curr++
    }

    for(let i=curr; i<nums.length; i++){
        if(nums[curr] !== 1 && nums[i] == 1){
            let temp = nums[i];
            nums[i] = nums[curr];
            nums[curr]= temp
            curr++
        }
        if(nums[i] === 1) curr++
    }

    for(let i=curr; i<nums.length; i++){
        if(nums[curr] !== 2 && nums[i] == 2){
            let temp = nums[i];
            nums[i] = nums[curr];
            nums[curr]= temp
            curr++
        }
        if(nums[i] === 2) curr++
    }

    return nums
};