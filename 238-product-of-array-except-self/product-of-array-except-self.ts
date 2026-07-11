function productExceptSelf(nums: number[]): number[] {
    const res : number[] = new Array(nums.length).fill(1);
    let prefix : number = 1;
    let suffix : number = 1;

    for(let i=0; i<nums.length; i++){
        res[i]=prefix;
        prefix*=nums[i]
    }

    for(let i=nums.length-1; i>=0; i--){
        res[i]*=suffix;
        suffix*=nums[i];
    }
    return res

};