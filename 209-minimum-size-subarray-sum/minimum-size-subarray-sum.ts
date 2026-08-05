function minSubArrayLen(target: number, nums: number[]): number {
    let l:number = 0, r:number = 0;
    let sum:number = 0;
    let min:number = nums.length+1;
    while(r < nums.length){
        sum += nums[r];
        r++;
        while(sum >= target){
            min = min > r-l ? r-l : min;
            sum -= nums[l];
            l++;
        }
    }
    return min == nums.length+1 ? 0 : min;
};