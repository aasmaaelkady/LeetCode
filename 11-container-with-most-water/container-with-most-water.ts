function maxArea(height: number[]): number {
    let l:number =0 , r:number=height.length-1, res:number=0;
    while(l<r){
        let width:number =0
        if(height[l]<height[r]){
            width = height[l]*(r-l);
            l++;
        } else {
            width = height[r]*(r-l);
            r--;
        }
        if(width>res) res = width;
    }
    return res
};