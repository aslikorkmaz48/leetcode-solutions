/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var makeSimilar = function(nums, target) {
    // nums ve target'ı tek ve çift olarak ayır
    let numsOdd = nums.filter(x => x % 2 === 1).sort((a, b) => a - b);
    let numsEven = nums.filter(x => x % 2 === 0).sort((a, b) => a - b);
    let targetOdd = target.filter(x => x % 2 === 1).sort((a, b) => a - b);
    let targetEven = target.filter(x => x % 2 === 0).sort((a, b) => a - b);

    let ans = 0n;

    // Tekler için farkları hesapla
    for (let i = 0; i < numsOdd.length; i++) {
        ans += BigInt(Math.abs(numsOdd[i] - targetOdd[i]));
    }

    // Çiftler için farkları hesapla
    for (let i = 0; i < numsEven.length; i++) {
        ans += BigInt(Math.abs(numsEven[i] - targetEven[i]));
    }

    // Her işlem 2 birim değişiklik yaptığı için sonucu 4'e böl
    return Number(ans / 4n);
};
