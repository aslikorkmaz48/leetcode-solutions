/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
    const n = nums.length;
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([nums[i], cost[i]]);
    }
    // nums'a göre sırala
    arr.sort((a, b) => a[0] - b[0]);

    // toplam ağırlık (cost)
    let totalWeight = 0n;
    for (let [_, c] of arr) {
        totalWeight += BigInt(c);
    }

    // ağırlıklı medianı bul
    let half = (totalWeight + 1n) / 2n;
    let prefix = 0n;
    let target = arr[0][0];
    for (let [num, c] of arr) {
        prefix += BigInt(c);
        if (prefix >= half) {
            target = num;
            break;
        }
    }

    // maliyeti hesapla
    let ans = 0n;
    for (let [num, c] of arr) {
        ans += BigInt(Math.abs(num - target)) * BigInt(c);
    }
    return Number(ans);
};
