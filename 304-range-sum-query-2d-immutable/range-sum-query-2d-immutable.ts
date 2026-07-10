class NumMatrix {
    private prefix : number[][];
    constructor(matrix: number[][]) {
        let row : number = matrix.length+1
        let col : number = matrix[0].length+1
        this.prefix = Array.from({length: row},()=> new Array(col).fill(0))
        for(let i=1; i< row; i++){
            for(let j=1; j<col; j++){
                this.prefix[i][j] = matrix[i-1][j-1]+this.prefix[i-1][j]+this.prefix[i][j-1]- this.prefix[i-1][j-1]
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return this.prefix[row2+1][col2+1] - this.prefix[row2+1][col1] - this.prefix[row1][col2+1] + this.prefix[row1][col1]
     
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */