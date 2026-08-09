function calPoints(operations: string[]): number {
    let res : number [] = []

    for(let i=0; i<operations.length; i++){
        console.log(res)
        if(operations[i] == "C"){
            res.pop()
        }else if(operations[i] == 'D'){
            res.push(res[res.length-1]*2)
        }else if(operations[i] == '+'){
            res.push(res[res.length-1]+res[res.length-2])
        } else{
            res.push(Number(operations[i]))
        }
    }
    return res.reduce((total,num)=> total+num, 0)
};