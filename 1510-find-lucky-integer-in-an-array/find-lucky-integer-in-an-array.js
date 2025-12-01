/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const freq = {};

    // Frekansları hesapla
    for (let n of arr) {
        freq[n] = (freq[n] || 0) + 1;
    }

    let result = -1;

    // Şanslı sayıları kontrol et
    for (let key in freq) {
        let num = Number(key);
        if (freq[num] === num) {
            result = Math.max(result, num);
        }
    }

    return result;
};
