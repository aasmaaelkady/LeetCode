function twoSum(numbers: number[], target: number): number[] {
    let l:number =0, r:number=numbers.length-1;
    while(l<r){
        if((numbers[l]+numbers[r]) == target){
            return [l+1, r+1]
        } else if((numbers[l]+numbers[r]) > target){
            r--;
        } else{
            l++
        }
    }
};