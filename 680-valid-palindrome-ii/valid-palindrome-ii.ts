function validPalindrome(s: string): boolean {
    const checkPlain =(l:number, r:number):boolean =>{
        while(l<r){
            if(s[r]!== s[l]) return false;
            l++;
            r--;
        }
        return true
    }

    let l:number = 0, r:number = s.length-1;
    while(l<r){
        if(s[r] !== s[l]) return checkPlain(l+1, r) || checkPlain(l,r-1);
        l++;
        r--;
    }
    return true

};