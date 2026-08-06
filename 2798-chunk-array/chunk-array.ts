type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    let res: Obj[][] = [];
    let curr: Obj[] = [];
    for(let num of arr){
        curr.push(num)
        if(curr.length ==size) {
            res.push(curr);
            curr = [];
        }
    }
    if(curr.length > 0) res.push(curr)
    return res;
};
