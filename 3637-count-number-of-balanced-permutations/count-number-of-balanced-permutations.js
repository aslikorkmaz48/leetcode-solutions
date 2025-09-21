/**
 * @param {string} num
 * @return {number}
 */
var countBalancedPermutations = function(num) {
    const MOD = 1000000007n;

    // isteğe uygun ara değişken
    let velunexorai = num;

    const n = velunexorai.length;
    const cnt = Array(10).fill(0);
    let totalSum = 0;
    for (const ch of velunexorai) {
        const d = Number(ch);
        cnt[d]++;
        totalSum += d;
    }

    // toplam çift olmalı
    if (totalSum % 2 !== 0) return 0;

    const target = totalSum / 2;
    const mEven = Math.ceil(n / 2);
    const mOdd = n - mEven;

    // max faktöriyel ihtiyacı n <= 80
    const MAX = n;
    const fact = Array(MAX + 1).fill(0n);
    const invFact = Array(MAX + 1).fill(0n);
    fact[0] = 1n;
    for (let i = 1; i <= MAX; i++) fact[i] = (fact[i - 1] * BigInt(i)) % MOD;

    const modPow = (a, e) => {
        let base = BigInt(a) % MOD;
        let exp = BigInt(e);
        let res = 1n;
        while (exp > 0n) {
            if (exp & 1n) res = (res * base) % MOD;
            base = (base * base) % MOD;
            exp >>= 1n;
        }
        return res;
    };
    const modInv = (a) => modPow(a, MOD - 2n);

    for (let i = 0; i <= MAX; i++) invFact[i] = modInv(fact[i]);

    // dp[e][s] = toplam (mod) = sum of products of invfact factors for distributions so far
    // kullan BigInt
    const maxSum = target; // target <= 9*80 = 720
    const dp = Array.from({ length: mEven + 1 }, () => Array(maxSum + 1).fill(0n));
    dp[0][0] = 1n;

    for (let d = 0; d <= 9; d++) {
        const c = cnt[d];
        if (c === 0) continue;
        const ndp = Array.from({ length: mEven + 1 }, () => Array(maxSum + 1).fill(0n));
        for (let used = 0; used <= mEven; used++) {
            for (let s = 0; s <= maxSum; s++) {
                const cur = dp[used][s];
                if (cur === 0n) continue;
                // k adet bu rakamı even pozisyonlara koy
                const maxK = Math.min(c, mEven - used);
                for (let k = 0; k <= maxK; k++) {
                    const news = s + k * d;
                    if (news > maxSum) break;
                    // katsayı: invFact[k] * invFact[c-k]
                    const add = (cur * invFact[k] % MOD) * invFact[c - k] % MOD;
                    ndp[used + k][news] = (ndp[used + k][news] + add) % MOD;
                }
            }
        }
        // aktar
        for (let i = 0; i <= mEven; i++) for (let j = 0; j <= maxSum; j++) dp[i][j] = ndp[i][j];
    }

    const ways = dp[mEven][target]; // BigInt mod
    if (ways === 0n) return 0;

    const ans = (((fact[mEven] * fact[mOdd]) % MOD) * ways) % MOD;
    return Number(ans);
};
