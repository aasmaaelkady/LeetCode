function containsDuplicate(nums: number[]): boolean {
    //brote force 
    //add nums to set and check if size equal to nums but in this way need to check all elments increase the time 
    const set: Set<number>  = new Set();
    for(const num of nums){
       if(set.has(num)) return true
       set.add(num)
    }
    return false
};