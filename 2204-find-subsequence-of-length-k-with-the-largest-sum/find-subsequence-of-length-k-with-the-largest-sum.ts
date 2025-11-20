function maxSubsequence(nums: number[], k: number): number[] {
    // Elemanları (değer + index) olarak tut
    const arr = nums.map((num, i) => ({ num, i }));

    // En büyük k elemanı seç (num’a göre sıralayıp)
    arr.sort((a, b) => b.num - a.num);

    const topK = arr.slice(0, k);

    // Alt dizi olduğu için tekrar index’e göre sırala
    topK.sort((a, b) => a.i - b.i);

    // Sadece değerleri döndür
    return topK.map(x => x.num);
}
