type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const res : number [] = [];
    arr.map((num, i)=> {if(fn(num, i)) res.push(num)})
    return res;
};