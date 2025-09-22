/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let result = new Set();

    // 3 basamaklı sayılar için i, j, k indexlerini seç
    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
                // aynı index kullanılamaz
                if (i === j || j === k || i === k) continue;

                let a = digits[i], b = digits[j], c = digits[k];

                // ilk basamak sıfır olamaz
                if (a === 0) continue;

                // son basamak çift olmalı
                if (c % 2 !== 0) continue;

                let num = a * 100 + b * 10 + c;
                result.add(num);
            }
        }
    }

    return Array.from(result).sort((x, y) => x - y);
};
