/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    const MOD = 1e9 + 7;
    const n = 26; // harfler a..z

    // dp[c][k] çok büyük olacağından sadece 2 satır saklayalım (rolling array)
    let prev = new Array(n).fill(1); // k=0 için hepsi 1
    let curr = new Array(n).fill(0);

    for (let step = 1; step <= t; step++) {
        for (let c = 0; c < n; c++) {
            if (c < 25) {
                curr[c] = prev[c+1]; // bir sonraki harfe dönüşüyor
            } else {
                // 'z' -> "ab"
                curr[c] = (prev[0] + prev[1]) % MOD;
            }
        }
        [prev, curr] = [curr, prev]; // swap
    }

    let ans = 0;
    for (let ch of s) {
        ans = (ans + prev[ch.charCodeAt(0) - 97]) % MOD;
    }
    return ans;
};
