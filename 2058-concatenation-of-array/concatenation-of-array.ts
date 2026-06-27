function getConcatenation(nums: number[]): number[] {
    let res:number[] = [...nums];
    res.push(...nums)
    return res
};