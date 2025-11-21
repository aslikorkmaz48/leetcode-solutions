function maxSubsequence(nums: number[], k: number): number[] {
    // 1. Elemanları değer ve indeks ile sakla
    let arr = nums.map((num, idx) => ({ value: num, index: idx }));

    // 2. Değerlerine göre büyükten küçüğe sırala ve ilk k'yı al
    arr.sort((a, b) => b.value - a.value);
    let topK = arr.slice(0, k);

    // 3. Orijinal indekse göre sırala
    topK.sort((a, b) => a.index - b.index);

    // 4. Sadece değerleri döndür
    return topK.map(item => item.value);
}
