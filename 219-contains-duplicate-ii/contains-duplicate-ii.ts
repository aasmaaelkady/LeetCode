function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map : Map<number, number> = new Map()
    for(let i=0; i< nums.length; i++){
        let val : number|undefined = map.get(nums[i])
        if(val != undefined && Math.abs(val-i) <= k){
            return true
        }
        map.set(nums[i],i)
    }
    return false
};