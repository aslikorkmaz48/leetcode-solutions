/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function(nums, k) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    let n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let g = 0;
        for (let j = i; j < n; j++) {
            g = gcd(g, nums[j]);
            if (g === k) count++;
            else if (g < k) break; // GCD daha küçük olursa, ileride k'ya çıkamaz
        }
    }

    return count;
};
