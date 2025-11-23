function numSubseq(nums: number[], target: number): number {
    const mod = 1_000_000_007;
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const pow2 = new Array(n).fill(1);

    // 2^i değerlerini mod ile önceden hesapla
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % mod;
    }

    let l = 0, r = n - 1, ans = 0;

    while (l <= r) {
        if (nums[l] + nums[r] <= target) {
            ans = (ans + pow2[r - l]) % mod;
            l++;
        } else {
            r--;
        }
    }

    return ans;
}
