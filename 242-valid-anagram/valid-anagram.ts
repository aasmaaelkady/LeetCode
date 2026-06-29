function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    
    let sMap: Map<string, number> = new Map();
    let tMap : Map<string, number> = new Map();

    for(const sLetter of s){
        sMap.set(sLetter, (sMap.get(sLetter) || 0)+1)
    }

     for(const tLetter of t){
        tMap.set(tLetter, (tMap.get(tLetter) || 0)+1)
    }

    for(const [key,val] of sMap){
        if(tMap.get(key) !== val) return false
    }

    return true
};