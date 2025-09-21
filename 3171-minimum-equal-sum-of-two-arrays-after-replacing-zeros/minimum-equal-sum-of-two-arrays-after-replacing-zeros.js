/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    let sum1 = 0, sum2 = 0;
    let zeros1 = 0, zeros2 = 0;

    for (let x of nums1) {
        if (x === 0) zeros1++;
        else sum1 += x;
    }
    for (let x of nums2) {
        if (x === 0) zeros2++;
        else sum2 += x;
    }

    const min1 = sum1 + zeros1; // nums1'in alabileceği en küçük toplam
    const min2 = sum2 + zeros2; // nums2'nin alabileceği en küçük toplam

    const M = Math.max(min1, min2);

    // Eğer bir tarafta sıfır yoksa ve mevcut toplam M'ye eşit değilse imkansızdır
    if (zeros1 === 0 && sum1 !== M) return -1;
    if (zeros2 === 0 && sum2 !== M) return -1;

    return M;
};
