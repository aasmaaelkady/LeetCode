function checkInclusion(s1: string, s2: string): boolean {
    let s1Count : number[] = Array(26).fill(0);
    let s2Count : number[] = Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s2.length - s1.length; i++) {
        if (check(s1Count, s2Count)) return true;
        s2Count[s2.charCodeAt(i) - 97]--;
        s2Count[s2.charCodeAt(i + s1.length) - 97]++;
    }

    return check(s1Count, s2Count);
};

function check(s1Count, s2Count) {
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] !== s2Count[i]) return false;
    }
    return true;
};