function isPalindrome(s: string): boolean {
    let str : string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    .split('').join('');

    let l:number =0;
    let r:number =str.length-1;

    while(l<=r){
        if(str[r]!==str[l]) return false
        r--
        l++
    }
    return true

};