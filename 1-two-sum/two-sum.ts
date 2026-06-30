function twoSum(nums: number[], target: number): number[] {
    //const res: number[] = [];
    const map: Map<number,number> = new Map()
    for(let i=0; i<nums.length; i++){
       map.set(nums[i], i)
    }

    for(let i=0;i <nums.length; i++){
        let val = map.get(target-nums[i])
        if(val !== undefined && val !== i) return [i,val] 
    }
};