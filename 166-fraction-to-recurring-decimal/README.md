# ✅ LeetCode - Çift Basamaklı Sayılar (Find Numbers with Even Number of Digits)

## 🔗 Soru Bağlantısı

[LeetCode 1295 - Find Numbers with Even Number of Digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)

---

## 🧾 Soru Açıklaması

Bir tamsayı dizisi `nums` veriliyor. Bu dizideki **basamak sayısı çift olan** sayıların adedini bulun.

---

## 🧠 Kısıtlamalar

- Dizi uzunluğu: `1 <= nums.length <= 500`
- Elemanlar: `1 <= nums[i] <= 10^5`

---

## 🔍 Örnekler

- Girdi: `nums = [12, 345, 2, 6, 7896]`  
  Çıktı: `2`  
  Açıklama: `12` ve `7896` çift basamak sayısına sahip (sırasıyla 2 ve 4 basamak).

- Girdi: `nums = [555, 901, 482, 1771]`  
  Çıktı: `1`

---

## 💡 Çözüm Yaklaşımı

- Dizideki her sayının basamak sayısını hesaplayın.
- Basamak sayısı çift olan sayıların sayısını artırın.
- Basamak sayısını hesaplamak için sayıyı 10’a bölerek basamakları sayabilirsiniz.
- Sonuç olarak, çift basamak sayısına sahip sayıların toplam adedini döndürün.

---

## ⏱ Performans

- Zaman karmaşıklığı: `O(n * k)`, burada `n` dizi uzunluğu, `k` ise basamak sayısıdır (genellikle sabit ve küçük).
- Alan karmaşıklığı: `O(1)`

---

## 📌 Notlar

- Basamak sayısını hesaplamak için string dönüşümü de kullanılabilir ancak matematiksel bölme işlemi daha performanslıdır.
- Basamak sayısı çift olan tüm sayıları saymak temel bir döngü ve koşul kontrolü ile kolayca yapılabilir.
