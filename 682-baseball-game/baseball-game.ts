function calPoints(operations: string[]): number {
    let res : number [] = [];
    let sum : number =0;

    for(let i=0; i<operations.length; i++){
        if(operations[i] == "C"){
            let val = res.pop();
            sum-=val
        }else if(operations[i] == 'D'){
            res.push(res[res.length-1]*2)
            sum+= res[res.length-1]
        }else if(operations[i] == '+'){
            res.push(res[res.length-1]+res[res.length-2])
            sum+= res[res.length-1]
        }else{
            res.push(Number(operations[i]))
            sum+= Number(operations[i])
        }
    }
    return sum
};