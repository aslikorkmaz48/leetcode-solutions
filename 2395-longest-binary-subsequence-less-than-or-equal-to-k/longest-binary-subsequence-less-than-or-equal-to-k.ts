function longestSubsequence(s: string, k: number): number {
    let zeros = 0; 
    let onesCount = 0;
    let value = 0;
    let bit = 0;

    // 0'ların tamamı alınabilir
    for (let ch of s) {
        if (ch === '0') zeros++;
    }

    // Sağdan sola 1'leri seçiyoruz
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '1') {
            // Değer çok büyürse >> durdurur
            if (bit < 31) { 
                let add = 1 << bit;
                if (value + add <= k) {
                    value += add;
                    onesCount++;
                }
            }
            bit++;
        } else {
            bit++;
        }
    }

    return zeros + onesCount;
}
